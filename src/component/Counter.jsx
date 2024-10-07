import React, { useState } from 'react'
import Button from '@mui/material/Button';

const counter = () => {
    const[count,setCount]=useState(0)
function handleClickI() {
  setCount(count + 1);
}
  return (
    <div>Counter:{count} <br />
    <Button variant="contained" sx={{margin:3,backgroundColor:'#6EC207',padding: '10px 20px'}} onClick={handleClickI}>Increment</Button>
    <Button variant="contained" sx={{backgroundColor:'#D91656',padding: '10px 20px',margin:3}} onClick={()=> setCount(count - 1)}>Decrement</Button>
    <Button variant="contained" sx={{backgroundColor:'#6439FF',padding: '10px 20px',margin:3}} onClick={()=> setCount(count*2)}>Double</Button>
    <Button variant="contained" sx={{backgroundColor:'#F57D1F',padding: '10px 20px',margin:3}} onClick={()=> setCount(count/2)}>Half</Button></div>
  )
}

export default counter