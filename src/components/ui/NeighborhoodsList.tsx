import React from 'react'
import type { Neighborhood } from '@/data/visited-neighborhoods'

interface NeighborhoodsListProps {
  neighborhoods: Neighborhood[]
}

export default function NeighborhoodsList({ neighborhoods }: NeighborhoodsListProps) {
  // Group neighborhoods by city
  const neighborhoodsByCity = neighborhoods.reduce(
    (acc, neighborhood) => {
      const key = `${neighborhood.city}, ${neighborhood.country}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(neighborhood)
      return acc
    },
    {} as Record<string, Neighborhood[]>
  )

  return (
    <div className="neighborhoods-list">
      <div className="stats">
        <strong>{neighborhoods.length}</strong> neighborhoods explored across{' '}
        <strong>{Object.keys(neighborhoodsByCity).length}</strong> cities
      </div>

      <div className="neighborhoods-by-city">
        {Object.entries(neighborhoodsByCity)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([cityKey, cityNeighborhoods]) => (
            <div key={cityKey} className="city-group">
              <h3>{cityKey}</h3>
              <ul>
                {cityNeighborhoods
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((neighborhood, idx) => (
                    <li key={`${neighborhood.name}-${idx}`}>
                      {neighborhood.name}
                      {neighborhood.description && (
                        <span className="description"> — {neighborhood.description}</span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  )
}
