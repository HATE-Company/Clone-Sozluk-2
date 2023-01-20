import React from 'react'
import { Styled } from './SectionCard.styled'

const SectionCard = () => {
  return (
    <Styled>
      <div className='card-general'>
        <div className='card-header'>
          <div className='card-left'>
            <span className='card-left-img'>Fourthy</span>
            <span className='card-left-name'>Fourthy</span>
          </div>
          <div className='card-right'>
            <span className='card-right-date'>1 minutes ago</span>
          </div>
        </div>
      </div>
      
    </Styled>
  )
}

export default SectionCard