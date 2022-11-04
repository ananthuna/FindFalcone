import { Box } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'rgba(169, 113, 184, 0.32)', height: '3rem', alignItems: 'center',pt:'2rem'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/ananthuna/FindFalcone">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>

    </Box>
  )
}

export default Footer
