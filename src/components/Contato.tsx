"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Contato = () => {
  return ( 
    <section className='contato mt-[9%] text-center text-black p-5'>
      <div id='contato' className='contato__info w-4/5 m-auto'>
          <div className='contato__info-holder flex flex-row w-full justify-center'>
            <div className='contato__info-left text-left w-1/3 flex flex-col gap-2'>
              <h1 className='text-xl font-thin italic tracking-wide text-brand'>Contatos</h1>
              <h3><FontAwesomeIcon icon={faLocationDot} size='1x'/> Endereço</h3>
              <p>Rua Philadelpho Pinto de Carvalho, 317, João Pessoa, Jardim Oceania - 58037-705</p>
              <h3><FontAwesomeIcon icon={faWhatsapp} size='1x' /> Celular</h3>
              <p>(51) 9 0000-0000</p>
              <h3><FontAwesomeIcon icon={faEnvelope} size='1x'/> E-mail</h3>
              <p>tatyboazao@live.com.pt</p>
            </div>
            <div className='contato__info-right w-[500px]'>
                <Image src='/bgHero.png' alt='foto do local' width={500} height={300} className='object-cover'/>
            </div>
          </div>
      </div>
    </section>
  )
}
