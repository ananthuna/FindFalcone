import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <Box sx={{width:'85.3rem',m:"-0.5rem"}}>
      <Header/>
      <Body/>
      <Footer/>
    </Box>
  )
}

export default Home
