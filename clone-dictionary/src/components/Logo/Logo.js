import React from 'react'
import { Styled } from './Logo.styled'
import logo from '../images/hateLogo.svg' 

const Logo = () => {
  return (
    <Styled>
      <img src={logo} alt='Hate Logo'/>
    </Styled>
  )
}

export default Logo