import { FormControl, FormControlLabel, Radio, RadioGroup, } from '@mui/material'
import React from 'react'

function ShipList() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ship1"
                name="radio-buttons-group"
            >
                <FormControlLabel value="ship1" control={<Radio />} label="ship" />
                <FormControlLabel value="ship2" control={<Radio />} label="ship" />
                <FormControlLabel value="ship3" control={<Radio />} label="ship" />
                <FormControlLabel value="ship4" control={<Radio />} label="ship" />
            </RadioGroup>
        </FormControl>
    )
}

export default ShipList
