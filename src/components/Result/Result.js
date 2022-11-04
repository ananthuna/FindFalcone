import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/Context'


function Result() {
  const { result,time } = useContext(UserContext)

 
  





  return (
    <Box>
      {result.error ? (
        <Box sx={{
          height: '31.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2,
        }}>
          <Typography variant="h4">Invalid Token please reset and try again</Typography>
        </Box >
      ) : (
        <Box sx={{
          height: '31.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2,
        }}>
          <Typography variant="h4">
            {result.status === "success" ? (
              "Success!Congratulations on Finding Falcone. King Shan is mighty pleased."
            ) : (
              "False!Sorry your attempt to find Falcone failed.Try again"
            )}
          </Typography>
          <Typography variant="h4">Time Taken:{result.status === "success" ? (time) : ("0")}</Typography>
          <Typography variant="h4">Planet found:{result.status === "success" ? (result.planet_name) : ("")}</Typography>
        </Box >
      )

      }
    </Box>
  )
}

export default Result
