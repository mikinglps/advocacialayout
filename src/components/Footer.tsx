import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'




export const Footer = () => {

  return (
    <footer className='footer__main flex flex-row bg-brand p-10 gap-9' >
        <div className='footer__logo w-1/3 flex flex-col items-center'>
            <div className='footer__logo-img'>
            <Image src='/logo-white.png' alt='Logo branco' width={150} height={200} className='object-contain'/>
            </div>
            <p className='font-thin text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa quis libero semper lacinia id sed tortor. In rutrum tellus id nunc volutpat, ut efficitur enim placerat. Cras metus justo, hendrerit vitae ante eu, commodo imperdiet lectus. Sed sit amet elementum lacus.</p>
            <div className='footer__logo-icons flex flex-row items-center justify-center gap-2'>
                <Link href='#'><FontAwesomeIcon icon={faInstagram} size='1x' className='hover:text-black'/></Link>
                <Link href='#'><FontAwesomeIcon icon={faFacebook} size='1x' className='hover:text-black'/></Link>
            </div>
        </div>
        <div className='footer__contato w-1/3 flex flex-col gap-3'>
            <h2 className='tracking-widest font-extrabold text-[1rem]'>Contato</h2>
            <p><FontAwesomeIcon icon={faLocationDot} size='1x'/> Rua Philadelpho Pinto de Carvalho, 317, João Pessoa, Jardim Oceania - 58037-705</p>
            <p><FontAwesomeIcon icon={faEnvelope} size='1x'/> tatyboazao@live.com.pt</p>
            <p><FontAwesomeIcon icon={faWhatsapp} size='1x'/> (51) 9 0000-0000</p>
        </div>
        <div className='footer__menuRapido flex flex-col w-1/6 gap-3'>
            <h2 className='tracking-widest font-extrabold text-[1rem]'>Acesso rápido</h2>
            <Link href='http://localhost:3000' className='text-sm font-thin'>Inicio</Link>
            <Link href='http://localhost:3000/#atuacao' className='text-sm font-thin'>Atuação</Link>
            <Link href='http://localhost:3000/#sobre' className='text-sm font-thin'>Sobre Mim</Link>
            <Link href='http://localhost:3000/contato' className='text-sm font-thin'>Contato</Link>
        </div>
    </footer>
  )
}