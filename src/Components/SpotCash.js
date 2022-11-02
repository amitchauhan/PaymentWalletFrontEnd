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

    const myStyle={
        backgroundImage:"url('https://th.bing.com/th/id/R.724e48c0b87c248871e26707faa010d9?rik=jT21em7L9VtA1w&riu=http%3a%2f%2fp.motionelements.com%2fstock-video%2fbusiness%2fme4201432-global-finance-stock-market-animation-hd-a0375.jpg&ehk=ZSrWjUIUVDnbYDwrYpS%2fjzafdMKQgdr%2b7lpbIvJaSAg%3d&risl=&pid=ImgRaw&r=0')",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        color:"white"
    }

    return (
        <div style={myStyle}>
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