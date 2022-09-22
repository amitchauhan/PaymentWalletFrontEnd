import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function SpotCash() {

    const [value,setValue] = useState('India');

    const handleChange =(event) => {
            setValue(event.target.value);

    }
    const [data, setData] = useState ("INR");

    const handleCurrency = (event) => {
            setData(event.taget.value);
    }

    const goToPayment= (event) => {
        alert("You will now be directed to payments page");
        event.preventDefault();
        window.location.replace("/makepayment");
    }
    

    return (
        <div>
            <h3>Buy currency</h3>
            
            <form action='/home' onSubmit={goToPayment}>
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
                <Button variant='contained' type="submit">Submit</Button>
            </div>
            </form>
    

        </div>
    )
}