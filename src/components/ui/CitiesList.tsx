import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import type { City } from '@/data/visited-cities'

interface CitiesListProps {
  cities: City[]
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function CitiesList({ cities }: CitiesListProps) {
  const [tooltipContent, setTooltipContent] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Group cities by country
  const citiesByCountry = cities.reduce(
    (acc, city) => {
      if (!acc[city.country]) {
        acc[city.country] = []
      }
      acc[city.country].push(city)
      return acc
    },
    {} as Record<string, City[]>
  )

  const countryNames: Record<string, string> = {
    AUT: 'Austria',
    BEL: 'Belgium',
    FRA: 'France',
    DEU: 'Germany',
    ITA: 'Italy',
    LIE: 'Liechtenstein',
    LUX: 'Luxembourg',
    NLD: 'Netherlands',
    POL: 'Poland',
    PRT: 'Portugal',
    ESP: 'Spain',
    CHE: 'Switzerland',
    GBR: 'United Kingdom',
    USA: 'United States'
  }

  // City coordinates (approximate)
  const cityCoordinates: Record<string, [number, number]> = {
    // Austria
    Vienna: [16.3738, 48.2082],
    // Belgium
    Brussels: [4.3517, 50.8503],
    // France
    Paris: [2.3522, 48.8566],
    // Germany
    Berlin: [13.405, 52.52],
    Munich: [11.582, 48.1351],
    Hamburg: [9.9937, 53.5511],
    // Italy
    Rome: [12.4964, 41.9028],
    Venice: [12.3155, 45.4408],
    Florence: [11.2558, 43.7696],
    // Netherlands
    Amsterdam: [4.9041, 52.3676],
    // Poland
    Warsaw: [21.0122, 52.2297],
    // Spain
    Barcelona: [2.1734, 41.3851],
    Madrid: [-3.7038, 40.4168],
    // Switzerland
    Zurich: [8.5417, 47.3769],
    // United Kingdom
    London: [-0.1276, 51.5074],
    // United States
    'New York': [-74.006, 40.7128],
    'Jersey City': [-74.0431, 40.7178],
    Houston: [-95.3698, 29.7604]
  }

  return (
    <div className="cities-list">
      <div className="stats">
        <strong>{cities.length}</strong> cities visited across{' '}
        <strong>{Object.keys(citiesByCountry).length}</strong> countries
      </div>

      {/* Cities Map */}
      <div className="cities-map">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 147
          }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }: any) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: 'var(--border)',
                        stroke: 'var(--bg)',
                        strokeWidth: 0.5,
                        outline: 'none'
                      },
                      hover: {
                        fill: 'var(--text-tertiary)',
                        stroke: 'var(--bg)',
                        strokeWidth: 0.5,
                        outline: 'none'
                      },
                      pressed: {
                        fill: 'var(--text-secondary)',
                        stroke: 'var(--bg)',
                        strokeWidth: 0.5,
                        outline: 'none'
                      }
                    }}
                  />
                ))
              }
            </Geographies>

            {/* City markers */}
            {cities.map((city, idx) => {
              const coords = cityCoordinates[city.name]
              if (!coords) return null

              return (
                <Marker key={`${city.name}-${idx}`} coordinates={coords}>
                  <circle
                    r={3}
                    fill="var(--text-primary)"
                    stroke="var(--bg)"
                    strokeWidth={1}
                    onMouseEnter={(evt: any) => {
                      setTooltipContent(city.name)
                      setPosition({ x: evt.clientX, y: evt.clientY })
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </Marker>
              )
            })}
          </ZoomableGroup>
        </ComposableMap>

        {tooltipContent && (
          <div
            className="map-tooltip"
            style={{
              position: 'fixed',
              left: position.x + 10,
              top: position.y + 10,
              padding: '0.5em 0.75em',
              background: 'var(--text-primary)',
              color: 'var(--bg)',
              borderRadius: '4px',
              fontSize: 'var(--font-size-s)',
              pointerEvents: 'none',
              zIndex: 1000
            }}
          >
            {tooltipContent}
          </div>
        )}
      </div>

      {/* Cities list grouped by country */}
      <div className="cities-by-country">
        {Object.entries(citiesByCountry)
          .sort(([a], [b]) => (countryNames[a] || a).localeCompare(countryNames[b] || b))
          .map(([countryCode, countryCities]) => (
            <div key={countryCode} className="country-group">
              <h3>{countryNames[countryCode] || countryCode}</h3>
              <ul>
                {countryCities
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((city, idx) => (
                    <li key={`${city.name}-${idx}`}>{city.name}</li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  )
}
