import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'


function Result() {
  const { result } = useContext(UserContext)
  console.log(result);
  return (
    <div>
      <Typography>result:{result.planet_name}</Typography>
      <Typography>result:{result.status}</Typography>
    </div>
  )
}

export default Result
