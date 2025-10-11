import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const lat = url.searchParams.get('lat')
  const lon = url.searchParams.get('lon')

  if (!lat || !lon) {
    return new Response(JSON.stringify({ error: 'Missing coordinates' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    // Using Open-Meteo API (free, no API key required)
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`
    
    const response = await fetch(weatherUrl)
    
    if (!response.ok) {
      throw new Error('Weather API request failed')
    }

    const data = await response.json()
    
    // Map weather codes to conditions
    // https://open-meteo.com/en/docs
    const weatherCode = data.current.weather_code
    const weatherCondition = getWeatherCondition(weatherCode)

    return new Response(
      JSON.stringify({
        temperature: data.current.temperature_2m,
        weather: weatherCondition,
        timezone: data.timezone
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=1800' // Cache for 30 minutes
        }
      }
    )
  } catch (error) {
    console.error('Weather fetch error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch weather data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

function getWeatherCondition(code: number): string {
  // WMO Weather interpretation codes
  if (code === 0) return 'clear'
  if (code <= 3) return 'clouds'
  if (code <= 49) return 'fog'
  if (code <= 59) return 'drizzle'
  if (code <= 69) return 'rain'
  if (code <= 79) return 'snow'
  if (code <= 84) return 'rain'
  if (code <= 86) return 'snow'
  if (code <= 99) return 'thunderstorm'
  return 'clear'
}
