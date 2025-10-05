// Neighborhoods you've visited or lived in
// Format: { name, city, country (ISO alpha-3), description (optional) }

export interface Neighborhood {
  name: string
  city: string
  country: string
  description?: string
}

export const visitedNeighborhoods: Neighborhood[] = [
  // New York
  { name: 'Manhattan', city: 'New York', country: 'USA' },
  { name: 'Brooklyn', city: 'New York', country: 'USA' },

  // London
  { name: 'Westminster', city: 'London', country: 'GBR' },

  // Paris
  { name: 'Marais', city: 'Paris', country: 'FRA' },
  { name: 'Montmartre', city: 'Paris', country: 'FRA' },

  // Berlin
  { name: 'Mitte', city: 'Berlin', country: 'DEU' },
  { name: 'Kreuzberg', city: 'Berlin', country: 'DEU' }

  // Add more neighborhoods as you visit them
]
