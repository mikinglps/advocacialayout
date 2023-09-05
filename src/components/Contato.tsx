"use client";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import React, { useMemo } from 'react'

//TODO:Problema na hora de voltar pra home

export const Contato = () => {
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
    <section className='contato mt-[10%] text-center text-black'>Contato
      <div className='map'>
        <GoogleMap center={{ lat: position.lat, lng: position.lon}} zoom={15} mapContainerClassName='w-full h-[400px]'>
          <Marker position={center}/>
        </GoogleMap>
      </div>
    </section>
  )
}
