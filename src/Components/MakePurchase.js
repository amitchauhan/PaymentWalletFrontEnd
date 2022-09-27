import React from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';





export default function MakePurchase() {

 



    return (
      <div>
        <div style={{color:"purple"}}>
            <h1 >Welcome to our Purchase section</h1>
            <h2> choose from below services</h2>  
            </div>
  
        <div>
          <ul>
            <li> 
              <Link to="/cinema"><Button variant='contained'>Cinema</Button></Link></li><br/>
            <li> <Link to="/drawcash"><Button variant='contained'>SpotCash</Button></Link></li><br/>
            <li> <Button variant='contained'  >Medicines</Button></li><br/>
            <li> <Button variant='contained'  >Mall</Button></li><br/>
            <li> <Button variant='contained'  >Food and Beverages</Button></li><br/>
        
            
          </ul>
        </div> 

        </div> 
        
    )
}