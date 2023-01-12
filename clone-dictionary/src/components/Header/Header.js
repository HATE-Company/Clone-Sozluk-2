import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import User from '../User/User'
import { Styled } from './Header.styled'

const Header = () => {
  return (
    <Styled className='header'>
      <Logo />
      <Search />
      <User />
    </Styled>
  )
}

export default Header