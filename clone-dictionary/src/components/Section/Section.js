import React from 'react'
import SectionCard from '../SectionCard'
import { Styled } from './Section.styled'

const Section = () => {
  return (
    <Styled>
        <div className='section-text'>Trends For You</div>
        <SectionCard />
    </Styled>
  )
}

export default Section