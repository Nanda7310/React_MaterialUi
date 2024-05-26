import React from 'react'
import Stack from '@mui/material/Stack';
import Card2 from './Card2';
import Card1 from './Card1';
import Card3 from './Card3';


const CardDsiplay = () => {
  return (
    <Stack direction={'row'} gap={5} m={4}>
        <Card1/>
        <Card2/>
        <Card3/>

    </Stack>
    
  )
}

export default CardDsiplay
