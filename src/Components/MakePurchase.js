import React from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';





export default function MakePurchase() {

 
  const myStyle={
    color:"white",
    backgroundImage:"url('https://image.shutterstock.com/image-photo/text-sign-showing-our-services-600w-1528193291.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  }



    return (
      <div style={myStyle}>
        <div >
            <h1>Welcome to our Service page</h1>
            <h1> Please choose from below..</h1>  
            </div>
  
        <div>
          <ul>
            <li> 
              <Link to="/cinema"><Button variant='contained'>Cinema</Button></Link></li><br/>
            <li> <Link to="/drawcash"><Button variant='contained'>Spot Cash</Button></Link></li><br/>
            <li> <Button variant='contained'  >Malls</Button></li><br/>
            <li> <Button variant='contained'  >Food & Beverages</Button></li><br/>
            
        
            
          </ul>
        </div> 

        </div> 
        
    )
}