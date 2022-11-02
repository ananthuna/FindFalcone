import { FormControl, FormControlLabel, Radio, RadioGroup, } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'


function ShipList() {

  const { List, setVehicle, setNumb, numb } = useContext(UserContext)
  const [selectedVehicle, setselectedVehicle] = useState('')


  return (
    <FormControl onClick={e => {
      setVehicle(e.target.value)
      setselectedVehicle(e.target.value)
      setNumb(numb + 1)
    }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=''
        name="radio-buttons-group"
      >
        {List.map((list) => (
          <FormControlLabel
            value={list.name}
            disabled={list.total_no === 0 && selectedVehicle !== list.name}
            control={<Radio />}
            label={list.name + '(' + list.total_no + ')'}
          />
        ))}

      </RadioGroup>
    </FormControl>
  )
}

export default ShipList
