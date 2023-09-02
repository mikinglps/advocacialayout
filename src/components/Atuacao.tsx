import React from 'react'
import Image from 'next/image'

export const Atuacao = () => {
  return (
    <section className='atuacao flex flex-row max-w-[1280px] w-full m-auto items-center justify-center p-5 mt-[10%]'>
        <div className='atuacao__row1 w-1/3 flex flex-col gap-2 items-center'>
            <div className='row_object'>
                <h2 className='titulo_atuacao'>Trabalhista</h2>
                <p className='descricao_atuacao'>Sed erat mi, malesuada vel iaculis vel, laoreet hendrerit mi. Nulla placerat tempor velit eget eleifend. Nunc non porta justo, nec molestie augue.</p>
            </div>
            <div className='row_object'>
                <h2 className='titulo_atuacao'>Civil</h2>
                <p className='descricao_atuacao'>Pellentesque commodo erat ut justo interdum vehicula. Integer pharetra aliquet risus eu commodo.</p>
            </div>
        </div>
        <div className='atuacao__row2 w-1/3 flex flex-col gap-2 items-center'>
            <div className=''>
                <Image src="/balanca.png" alt='Balança' width={300} height={400} className='object-cover'/>
            </div>
            <div className='row_object'>
                <h2 className='titulo_atuacao'>Previdenciario</h2>
                <p className='descricao_atuacao'>Vestibulum ullamcorper neque risus, sed molestie lectus varius eget.</p>
            </div>
        </div>
        <div className='atuacao__row3 w-1/3 flex flex-col gap-2 items-center'>
            <div className='row_object'>
                <h2 className='titulo_atuacao'>Tributário</h2>
                <p className='descricao_atuacao'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className='row_object'>
                <h2 className='titulo_atuacao'>Criminal</h2>
                <p className='descricao_atuacao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus tincidunt elit eget vulputate. Nunc rhoncus augue at aliquet varius. Aenean hendrerit ut mi mollis sagittis.</p>
            </div>
        </div>
    </section>
  )
}
