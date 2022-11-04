import React from 'react'
import Box from '@mui/material/Box';
import './header.css'
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
  const handleReset = () => {
    navigate('/story')
  }

  const handleHome = () => {
    
    navigate('/')
  }

  return (
    <Box className="header" sx={{
      bgcolor: 'rgba(169, 113, 184, 0.32)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '5rem'
    }}>
      <Box sx={{ ml: '40%' }}>
        <Typography variant='h4'>Finding Falcone!</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: 1,
        mr: '1rem'
      }}>
        <Button onClick={handleReset} variant="outlined">Story</Button>
        <Button onClick={handleHome} variant="outlined">Home</Button>
      </Box>
    </Box>
  )
}

export default Header
