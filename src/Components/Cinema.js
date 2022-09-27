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
    return (
      
        <div>
            <h2>Book your tickets below</h2>
            <label>Movies: 
                <select value={value} onChange={handleChange}>
                    <option value="Brahamastra">Brahamastra</option>
                    <option value="Avatar">Avatar</option>
                    <option value="Karthikeya 2">Karthikeya 2</option>
                </select>
                </label>
                <p>My Movie: {value}</p>
                <p>Price Per Ticke: INR 250</p>
            
            <Button variant='contained' onClick={() =>{setCount(count + 1)}}>Add Tickets</Button>
            
            <br/>  
                      
            <div>
            <label>Tickets: {count} </label><br/>
            <p>Please refresh page to reset tickets</p>
            </div>
            
           <Link to="/makepayment" > <Button variant='contained' type="btn" onClick={alertPayment}>Submit</Button></Link>
            
            </div>
        
    )
}