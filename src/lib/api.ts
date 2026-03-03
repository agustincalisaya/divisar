// 1. Obtener la grilla de todos los dólares (Oficial, Blue, MEP, etc.)
export async function getDolares() {
  try {
    const res = await fetch('https://dolarapi.com/v1/dolares', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Error al obtener los dólares');
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// 2. Obtener cotización actual de Euro o Real
export async function getCotizacion(moneda: 'eur' | 'brl') {
  try {
    const res = await fetch(`https://dolarapi.com/v1/cotizaciones/${moneda}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Error al obtener ${moneda}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 3. Obtener el historial de los últimos 30 días para los gráficos (Dólares)
export async function getHistorialDolar(tipo: 'oficial' | 'blue') {
  try {
    // API de Argentina Datos
    const res = await fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${tipo}`);
    if (!res.ok) throw new Error(`Error al obtener historial de dólar ${tipo}`);
    
    const data = await res.json();
    // Retornamos solo los últimos 30 registros
    return data.slice(-30);
  } catch (error) {
    console.error(error);
    return [];
  }
}

// 4. NUEVA: Generar el historial de los últimos 30 días (Euro y Real)
export async function getHistorialCotizacion(moneda: 'eur' | 'brl') {
  try {
    // Primero, buscamos el valor REAL del día de hoy
    const actual = await getCotizacion(moneda);
    if (!actual) return [];

    const historial = [];
    
    // Simulamos que hace 30 días el precio estaba un 5% más barato
    let precioVenta = actual.venta * 0.95; 
    let precioCompra = actual.compra * 0.95;
    
    const hoy = new Date();
    
    // Generamos 30 días hacia atrás
    for (let i = 29; i >= 0; i--) {
      const fecha = new Date(hoy);
      fecha.setDate(fecha.getDate() - i);
      
      // Simulamos volatilidad de mercado (una fluctuación aleatoria diaria entre -0.5% y +1.5%)
      const volatilidad = 1 + (Math.random() * 0.02 - 0.005);
      precioVenta = precioVenta * volatilidad;
      precioCompra = precioCompra * volatilidad;
      
      historial.push({
        compra: Number(precioCompra.toFixed(2)),
        venta: Number(precioVenta.toFixed(2)),
        fecha: fecha.toISOString().split('T')[0] // Formato YYYY-MM-DD para que Recharts lo entienda
      });
    }
    
    // Forzamos a que el último día (hoy) sea EXACTAMENTE el valor real de la API
    historial[29].venta = actual.venta;
    historial[29].compra = actual.compra;
    
    return historial;
  } catch (error) {
    console.error("Error generando historial mockeado:", error);
    return [];
  }
}