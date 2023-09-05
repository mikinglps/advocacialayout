"use client"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import React, { useMemo } from 'react'

export const Map = () => {
    const position = ({
        lat: -29.933776,
        lon: -51.062368
      })
      const center = useMemo(() => ({ lat: -29.933776, lng: -51.062368}), []);
      const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      })

      if(!isLoaded){
        return <div className='loading'>Loading...</div>
      }
  return (
    <div className='map my-10'>
        <GoogleMap center={{ lat: position.lat, lng: position.lon}} zoom={15} mapContainerClassName='h-[400px] m-w-[1366px]'>
          <Marker position={center}/>
        </GoogleMap>
      </div>
  )
}
