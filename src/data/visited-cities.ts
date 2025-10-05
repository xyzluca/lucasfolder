// Cities you've visited
// Format: { name, country (ISO alpha-3), coordinates (optional for future map features) }

export interface City {
  name: string
  country: string
  coordinates?: { lat: number; lng: number }
}

export const visitedCities: City[] = [
  // Austria
  { name: 'Vienna', country: 'AUT' },

  // Belgium
  { name: 'Brussels', country: 'BEL' },

  // France
  { name: 'Paris', country: 'FRA' },

  // Germany
  { name: 'Berlin', country: 'DEU' },
  { name: 'Munich', country: 'DEU' },
  { name: 'Hamburg', country: 'DEU' },

  // Italy
  { name: 'Rome', country: 'ITA' },
  { name: 'Venice', country: 'ITA' },
  { name: 'Florence', country: 'ITA' },

  // Netherlands
  { name: 'Amsterdam', country: 'NLD' },

  // Poland
  { name: 'Warsaw', country: 'POL' },

  // Spain
  { name: 'Barcelona', country: 'ESP' },
  { name: 'Madrid', country: 'ESP' },

  // Switzerland
  { name: 'Zurich', country: 'CHE' },

  // United Kingdom
  { name: 'London', country: 'GBR' },

  // United States
  { name: 'New York', country: 'USA' },
  { name: 'Jersey City', country: 'USA' },
  { name: 'Houston', country: 'USA' }

  // Add more cities as needed
]
