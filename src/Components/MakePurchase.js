import React from 'react';
import { Button } from '@mui/material';





export default function MakePurchase() {

  const gotoCinema = (event) => {
    event.preventDefault();
window.location.replace("/cinema");
}

const goToDrawCash = (event) => {
  event.preventDefault();
window.location.replace("/drawcash");
}

    return (
      <div>
        <div style={{color:"purple"}}>
            <h1 >Welcome to our Purchase section</h1>
            <h2> choose from below services</h2>  
            </div>
  
        <div>
          <ul>
            <li> <Button variant='contained'  onClick={gotoCinema}>Cinema</Button></li><br/>
            <li> <Button variant='contained'  onClick={goToDrawCash}>SpotCash</Button></li><br/>
            <li> <Button variant='contained'  >Medicines</Button></li><br/>
            <li> <Button variant='contained'  >Mall</Button></li><br/>
            <li> <Button variant='contained'  >Food and Beverages</Button></li><br/>
        
            
          </ul>
        </div> 

        </div> 
        
    )
}