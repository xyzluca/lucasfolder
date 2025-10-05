declare module 'react-simple-maps' {
  import { ComponentType, CSSProperties } from 'react'

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      rotate?: [number, number, number]
    }
    width?: number
    height?: number
    style?: CSSProperties
    children?: React.ReactNode
  }

  export interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: any[] }) => React.ReactNode
  }

  export interface GeographyProps {
    geography: any
    style?: {
      default?: CSSProperties
      hover?: CSSProperties
      pressed?: CSSProperties
    }
    onMouseEnter?: (event: any) => void
    onMouseLeave?: (event: any) => void
    onClick?: (event: any) => void
  }

  export interface ZoomableGroupProps {
    center?: [number, number]
    zoom?: number
    minZoom?: number
    maxZoom?: number
    onMoveStart?: (position: any) => void
    onMoveEnd?: (position: any) => void
    children?: React.ReactNode
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: React.ReactNode
  }

  export const ComposableMap: ComponentType<ComposableMapProps>
  export const Geographies: ComponentType<GeographiesProps>
  export const Geography: ComponentType<GeographyProps>
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>
  export const Marker: ComponentType<MarkerProps>
}
