import React from 'react'
import Logo from '../Logo/Logo'
import User from '../User/User'
import { Styled } from './Header.styled'

const Header = () => {
  return (
    <Styled>
      Header
      <Logo />
      <User />
    </Styled>
  )
}

export default Header