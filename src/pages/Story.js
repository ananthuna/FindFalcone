import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import Story from  '../components/Story/Story'


function Home() {
  return (
    <Box sx={{width:'85.3rem',m:"-0.5rem"}}>
      <Header/>
      <Story/>
      <Footer/>
    </Box>
  )
}

export default Home
