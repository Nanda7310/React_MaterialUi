import { Box, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import LandingPage from './mainfolder/pages/LandingPage'

const App = () => {
  const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
   <ThemeProvider theme={darkTheme}>
     <Box bgcolor={"background.default"}>
     <LandingPage mode={mode} setMode={setMode}/>
   </Box>
   </ThemeProvider>
    
  
  )
}

export default App
