import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export default function SpotCash() {

    const [value,setValue] = useState('India');

    const handleChange =(event) => {
            setValue(event.target.value);

    }
    const [data, setData] = useState ("INR");

    const handleCurrency = (event) => {
            setData(event.target.value);
    }

  
    
    function alertPayment() {
        alert("You will now be directed to payment page..")
    }

    return (
        <div>
            <h3>Buy currency</h3>
            
            <form >
                <div>
                <label>Location: 
                <select value={value} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="UK">UK</option>
                </select>
                </label>

                <p>My Location: {value}</p>
            </div>
            <div>
                <label>Currency:
                <select value={data} onChange={handleCurrency}>
                    <option value="India">INR</option>
                    <option value="Singapore Dollar">Singapore Dollar</option>
                    <option value="Sterling">Sterling</option>
                </select>
                </label>

                <p>My Currency: {data}</p>
            </div>
            <div>
                <label>Amount:</label>
                <input type="text"></input><br/><br/>
                <Link to="/makepayment"><Button variant='contained' type="submit" onClick={alertPayment}>Submit</Button></Link>
            </div>
            </form>
    

        </div>
    )
}