import { FormControl, FormControlLabel, Radio, RadioGroup, } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'


function ShipList({ destination }) {

  const { List, setVehicle, setNumb, numb, setdestination, selectedShip } = useContext(UserContext)
  const [selectedVehicle, setselectedVehicle] = useState('')




  return (
    <FormControl onClick={e => {
      setVehicle(e.target.value)
      setselectedVehicle(e.target.value)
      setdestination(destination)
      setNumb(numb + 1)
      selectedShip.push(e.target.value)
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
