import React from 'react'
import Image from 'next/image'

export const NavBar = () => {
  return (
    <header className='w-full m-auto p-5 bg-brand '>
        <nav className='flex flex-row items-start gap-8 justify-between items-center'>
            <Image src="/logo-white.png" alt='Logo preto' width={50} height={100} className='object-contain'/>
            <ul className='flex flex-row items-start gap-3'>
                <li>Atuação</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
  )
}
