import { CardProps } from '@/types'
import React from 'react'
export const ProsCard = ({titulo, descricao}: CardProps) => {
  return (
    <div>
        <div className='items__box-text'>
            <h2 className='text-md font-semibold'>{titulo}</h2>
            <p className='text-xs font-thin'>{descricao}</p>
        </div>
    </div>
  )
}
