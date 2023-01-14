import React from 'react'
import Article from '../Article'
import Navbar from '../Navbar'
import Section from '../Section'
import { Styled } from './Main.styled'

const Main = () => {
  return (
    <Styled>
        <Navbar />
        <Section />
        <Article />
    </Styled>
  )
}

export default Main