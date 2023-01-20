import React from 'react'
import { Styled } from './SectionCard.styled'
import commentIcon from '../images/comment.png'
import bitcoin from '../images/bitcoin.png'

const SectionCard = () => {
  return (
    <Styled>
      <div className='card-general'>
        <div className='card-header'>
          <div className='card-left'>
            <span className='card-left-img'>
              <img src={commentIcon} />
            </span>
            <span className='card-left-name'>Fourthy</span>
          </div>
          <div className='card-right'>
            <span className='card-right-date'>1 minutes ago</span>
          </div>
        </div>
        <div className='card-main'>
          <div className='card-main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div>
        </div>
      </div>

      <div className='card-general'>
        <div className='card-header'>
          <div className='card-left'>
            <span className='card-left-img'>
              <img src={commentIcon} />
            </span>
            <span className='card-left-name'>Fourthy</span>
          </div>
          <div className='card-right'>
            <span className='card-right-date'>1 minutes ago</span>
          </div>
        </div>
        <div className='card-main'>
          <div className='card-main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div>
          <div className='card-img'>
            <img src={bitcoin} />
          </div>
        </div>
      </div>

      <div className='card-general'>
        <div className='card-header'>
          <div className='card-left'>
            <span className='card-left-img'>
              <img src={commentIcon} />
            </span>
            <span className='card-left-name'>Fourthy</span>
          </div>
          <div className='card-right'>
            <span className='card-right-date'>1 minutes ago</span>
          </div>
        </div>
        <div className='card-main'>
          <div className='card-main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div>
        </div>
      </div>
      
    </Styled>
  )
}

export default SectionCard