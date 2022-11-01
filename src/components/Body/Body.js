import { Autocomplete, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Box } from '@mui/system'
import React from 'react'
import './body.css'
import ShipList from '../shiplist/ShipList'

function Body() {
    return (
        <Box sx={{ height: '31.6rem'}}>
            <Box sx={{ pl: '40%', pt: '3rem' }}>
                <Typography variant='h6'>Select planets you wants to search</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '70%',
                pl: '2rem',
                pr: '2rem'
            }}>
                {items.map((item) => (
                    <Box>
                        <Typography>{item}</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 250, height: 50 }}
                            getOptionLabel={(options) => options.name}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <ShipList />

                    </Box>
                ))}
                <Box sx={{ pt: '5rem' }}>
                    <Typography>Time taken: 120</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained">Find Falcone</Button>
            </Box>

        </Box>
    )
}

export default Body

const items = ['Destination1', 'Destination2', 'Destination3', 'Destination4']


const top100Films = [
    { name: 'The Shawshank Redemption', year: 1994 },
    { name: 'The Godfather', year: 1972 },
    { name: 'The Godfather: Part II', year: 1974 },
    { name: 'The Dark Knight', year: 2008 },
    { name: '12 Angry Men', year: 1957 },
    { name: "Schindler's List", year: 1993 },
    { name: 'Pulp Fiction', year: 1994 }]


