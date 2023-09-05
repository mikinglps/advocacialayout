import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {

  return (
    <header id='inicio' className='w-full m-auto p-5 bg-brand'>
        <nav className='flex flex-row items-start gap-8 justify-between items-center'>
            <div className='logo__nav'>
            <Image src="/logo-white.png" alt='Logo preto' width={50} height={100} className='object-contain'/>
            </div>
            <ul className='flex flex-row items-start gap-3'>
              <li className='hover:text-black'><Link href='http://localhost:3000'>Inicio</Link></li>
                <li className='hover:text-black'><Link href='http://localhost:3000/#atuacao'>Atuação</Link></li>
                <li className='hover:text-black'><Link href='http://localhost:3000/#atuacao'>Sobre</Link></li>
                <li className='hover:text-black'><Link href='http://localhost:3000/contato'>Contato</Link></li>
            </ul>
        </nav>
    </header>
  )
}