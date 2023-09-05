import React from 'react'
import Image from 'next/image'

export const Sobre = () => {
  return (
    <section id='sobre' className='sobre relative w-full h-[400px] mt-10'>
        <div className='sobre__bg bg-brand w-3/4 h-[400px] absolute left-0 top-0 z-0'>
        </div>
        <div className='sobre__holder absolute z-10 top-0 left-[10%] flex flex-row m-w-[1280px] items-center justify-center p-5'>
            <div className='sobre__holder-text w-2/4'>  
                <h2 className='text-xl font-semibold'>Sobre Mim</h2>
                <p className='text-xs font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at tellus nec sem vulputate volutpat. Duis accumsan ornare ante, non pharetra tellus porta id. Mauris auctor turpis eros, ac interdum mauris pharetra eu. Proin mollis ac leo vel facilisis. Maecenas aliquet non tortor vitae egestas. Morbi volutpat tellus ut convallis suscipit. Cras posuere lectus ut consequat dapibus. In non nisl quis ipsum porta laoreet sit amet a erat. Quisque a vestibulum elit. Ut eu nibh bibendum libero hendrerit tempor. Morbi venenatis nisi a mauris sollicitudin gravida. Cras eu nisl egestas, consectetur neque ut, dapibus leo.</p>
            </div>
            <div className='sobre__holder-img w-1/4'>
                <Image src='/sobre.png' alt='Foto da advogada' width={300} height={300} className='object-cover'/>
            </div>
        </div>
    </section>
  )
}
