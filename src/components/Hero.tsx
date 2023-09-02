import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced, faCalendarDays, faPaperclip } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  return (
    <section className='hero m-auto h-[550px] w-full bg-bghero relative'>
        <div className='hero__text w-2/5 p-5 absolute top-20 left-10'>
            <h2 className='text-xl font-extrabold tracking-widest'>TATIANA RAMOS BOAZÃO</h2>
            <p className='text-md font-semibold italic'>Advogada OAB/RS 00.000</p>
            <p className='text-xs font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus augue, vulputate at facilisis vitae, sagittis vitae ex. Etiam lectus est, auctor et faucibus vitae, pretium in quam.</p>
            <button className='border-2 border-white bg-transparent p-1 w-[100px] mt-2 hover:bg-white hover:text-black'><span className=''>Sobre</span></button>
        </div>
        <div className='overhero w-3/4 h-[200px] absolute bottom-[-100px] left-[12%] bg-bg rounded-2xl shadow-xl'>
            <div className='overhero__left'>
            </div>
            <div className='overhero__holder flex flex-row gap-2 items-center justify-end h-full w-full'>
            <div className='overhero__row flex justify-center'>
                <Image src='/logo-black.png' alt='Logo branco' width={100} height={100} className='object-contain'/>
            </div>
            <div className='overhero__row'>
                <FontAwesomeIcon icon={ faScaleBalanced } size='3x' className='text-brand'/>
                <h3>Lorem Ipsum</h3>
                <p className='text-black font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod massa id ligula tincidunt</p>
            </div>
            <div className='overhero__row'>
                <FontAwesomeIcon icon={ faCalendarDays } size='3x' className='text-brand'/>
                <h3>Lorem Ipsum</h3>
                <p className='text-black font-thin'>Donec ultricies facilisis metus, sed condimentum velit molestie sit amet.</p>
            </div>
            <div className='overhero__row'>
                <FontAwesomeIcon icon={ faPaperclip } size='3x' className='text-brand' />
                <h3>Lorem Ipsum</h3>
                <p className='text-black font-thin'>Etiam ultricies mattis vehicula. Sed condimentum nec eros eget consectetur. </p>
            </div>
            </div>
        </div>
    </section>
  )
}
