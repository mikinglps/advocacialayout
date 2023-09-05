import React from 'react'
import { pros } from '@/constants'
import { ProsCard } from './ProsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife, faTablets, faVials, faHeart, faEye, faPlus } from '@fortawesome/free-solid-svg-icons'

export const Pros = () => {
    const icons = [ faStarOfLife, faTablets, faVials, faHeart, faEye, faPlus ]
    const rows = pros.length
  return (
    <section className='pros my-[5%]'>
        <div className='pros__inicio flex flex-row md:w-[800px] m-auto p-5'>
            <div className='pros__inicio-left w-1/5'>
            <h2 className='text-brand font-semibold text-xl'>Como atuo</h2>
            </div>
            <div className='pros__inicio-right w-2/3'>
            <p className='text-black font-thin text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae aliquam mi, et fringilla elit. Vivamus sapien ex, hendrerit eu tellus ac, fermentum vulputate leo. Aliquam sed velit dignissim tortor eleifend imperdiet a id nibh. Sed sed justo sit amet lectus facilisis fringilla sed sed tellus. Nam in nulla risus.</p>
            </div>
        </div>

        <div className='pros__flex flex flex-col gap-2 items-center w-full'> 
        <div className='pros__col'>
            
            {pros.slice(0, rows / 2).map((items, index) => (
                <div className='itens__single' key={index}>
                    <div className='items__box-icon'>
                        <FontAwesomeIcon icon={icons[index]} className='text-brand text-[14px] md:text-[20px]'/>
                    </div>
                    <ProsCard titulo={items.titulo} descricao={items.descricao} />
                </div>
            ))
            }
        </div>
        <div className='pros__col'>
            {pros.slice(rows / 2, rows).map((items, index) => {
                let indexIcon = rows / 2 + index
                return (
                <div className='itens__single' key={index}>
                    <div className='items__box-icon'>
                        <FontAwesomeIcon icon={icons[indexIcon]} className='text-brand text-[14px] md:text-[20px]'/>
                    </div>
                    <ProsCard titulo={items.titulo} descricao={items.descricao} />
                </div>
                )
            })
            }
        </div>
        </div>
    </section>
  )
}
