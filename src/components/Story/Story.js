import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Story() {
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }
    return (
        <Box sx={{
            height: '31.6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            pl: '8rem',
            pr: '5rem'
        }}>
            <Typography variant="h6">Our problem is set in the planet of Lengaburu…in the distant
                distant galaxy of Tara B. After the recent war<br /> with neighbouring
                planet Falicornia, King Shan has exiled the Queen of Falicornia
                for 15 years. </Typography>
            <Typography variant="h6">Queen Al Falcone is now in hiding. But if King Shan can find
                her before the years are up, she will be exiled for another 15
                years….</Typography>
            <Typography variant="h6">King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing,
                Sapir,<br /> Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these
                planets. </Typography>
            <Button onClick={handleHome} variant="outlined">Go to find Falcone</Button>


        </Box>
    )
}

export default Story