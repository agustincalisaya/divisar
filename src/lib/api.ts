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

export async function getHistorialDolar(tipo: 'oficial' | 'blue') {
  try {
    const res = await fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${tipo}`);
    if (!res.ok) throw new Error(`Error al obtener historial de dólar ${tipo}`);
    
    const data = await res.json();
    return data.slice(-30);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getHistorialCotizacion(moneda: 'eur' | 'brl') {
  try {
    const actual = await getCotizacion(moneda);
    if (!actual) return [];

    const historial = [];
    
    let precioVenta = actual.venta * 0.95; 
    let precioCompra = actual.compra * 0.95;
    
    const hoy = new Date();
    
    for (let i = 29; i >= 0; i--) {
      const fecha = new Date(hoy);
      fecha.setDate(fecha.getDate() - i);
      
      const volatilidad = 1 + (Math.random() * 0.02 - 0.005);
      precioVenta = precioVenta * volatilidad;
      precioCompra = precioCompra * volatilidad;
      
      historial.push({
        compra: Number(precioCompra.toFixed(2)),
        venta: Number(precioVenta.toFixed(2)),
        fecha: fecha.toISOString().split('T')[0]
      });
    }
    
    historial[29].venta = actual.venta;
    historial[29].compra = actual.compra;
    
    return historial;
  } catch (error) {
    console.error("Error generando historial mockeado:", error);
    return [];
  }
}