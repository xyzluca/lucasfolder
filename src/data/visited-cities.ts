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


  // France
  { name: 'Paris', country: 'FRA' },

  // Germany
  { name: 'Cologne', country: 'DEU' },
  { name: 'Frankfurt', country: 'DEU' },
  { name: 'Aachen', country: 'DEU' },
  { name: 'Wuppertal', country: 'DEU' },
  { name: 'Nuremberg', country: 'DEU' },
  { name: 'Bonn', country: 'DEU' },
  { name: 'Düsseldorf', country: 'DEU' },
  { name: 'Munich', country: 'DEU' },
  { name: 'Hamburg', country: 'DEU' },

  // Italy
  { name: 'Venice', country: 'ITA' },
  { name: 'Verona', country: 'ITA' },



  // Netherlands


  // Poland
  { name: 'Warsaw', country: 'POL' },

  // Spain
  { name: 'Palma', country: 'ESP' },

  // Switzerland
  { name: 'Zurich', country: 'CHE' },

  // United Kingdom
  { name: 'London', country: 'GBR' },
  { name: 'Reading', country: 'GBR' },
  { name: 'Oxford', country: 'GBR' },


  // United States
  { name: 'New York', country: 'USA' },
  { name: 'Austin', country: 'USA' },
  { name: 'Newark', country: 'USA' },
  { name: 'Newark', country: 'USA' },

  // Add more cities as needed
]
