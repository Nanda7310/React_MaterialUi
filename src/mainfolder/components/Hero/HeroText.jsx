import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroText = () => {
  return (
    <Box sx={{
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'500px'
    }}>
        <Typography variant='h3' fontWeight={500}>
            Post Graduate Programme in Manchine Learning
        </Typography>
    </Box>
  )
}

export default HeroText
