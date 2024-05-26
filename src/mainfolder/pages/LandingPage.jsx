import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navSection/NavBar'
import HeroSection from '../components/Hero/HeroSection'
import HeroText from '../components/Hero/HeroText'
import AccordianSection from '../components/AccordianSection'
import CardDsiplay from '../components/cards/CardDsiplay'
import MainTab from '../components/tabSection/MainTab'

const LandingPage = ({mode,setMode}) => {
  return (
    <Container>
   <Box>
    <NavBar mode={mode} setMode={setMode}/>
    <HeroSection/>
    <AccordianSection/>
    <CardDsiplay/>
    <MainTab/>
   
   </Box>
    </Container>
  
  )
}

export default LandingPage
