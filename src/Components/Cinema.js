import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export default function Cinema () {
    const [count, setCount] = useState(0);
    

    useEffect(()=> {
        console.log("update counter")
    },[count]); 
    
    
    const [value,setValue] = useState('Brahamastra');
    const handleChange =(event) => {
        setValue(event.target.value);
    }

    function alertPayment() {
        alert("You will now be directed to payment page..")
    }

    const myStyle={
        color:"white",
        backgroundImage:"url('https://th.bing.com/th/id/OIP.AioDCH3cwN6xgqzRU8IZdwHaDt?pid=ImgDet&rs=1')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }
    return (
      
        <div style={myStyle}>
            <h2>Book your tickets</h2>
            <label>Movies: 
                <select value={value} onChange={handleChange}>
                    <option value="Brahamastra">Brahamastra</option>
                    <option value="Avatar">Avatar</option>
                    <option value="Karthikeya 2">Karthikeya 2</option>
                </select>
                </label>
                <p>My Movie: {value}</p>
                <p>Price for latest movie: INR 250</p>
            
            <Button variant='contained' onClick={() =>{setCount(count + 1)}}>Add Tickets</Button>
            
            <br/>  
                      
            <div>
            <label>Tickets: {count} </label><br/>
            <p>Please refresh page to reset tickets</p>
            </div>
            
           <Link to="/makepayment" > <Button variant='contained' type="btn" onClick={alertPayment}>Book Now</Button></Link>
            
            </div>
        
    )
}