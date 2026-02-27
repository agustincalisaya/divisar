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

// 3. Obtener el historial de los últimos 30 días para los gráficos
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