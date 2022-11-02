import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ImageList, Typography } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';



export default function PaymentForm() {

    

    const itemData = [
        {
          img: 'https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png',
          title: 'Visa',
        },
        {
          img: 'https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png',
          title: 'MasterCard',
        },
        {
          img: 'https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png',
          title: 'Discover',
        },
      ];
    
     function alertPurchase() {
      alert("Your transaction is completed. You will now be directed to Purchase Section..")
     }

    //  const myStyle={
    //   color:"white",
    //   backgroundColor:"gray",
    //   backgroundRepeat:"no-repeat",
    //   backgroundSize:"cover",
    //   mt:0
    // }


    useEffect(()=> {
      console.log("update counter")
  }); 
  
  
  const [value,setValue] = useState('Credit Card');
  const handleChange =(event) => {
      setValue(event.target.value);
  }

   
    
  return (
<Box

    
component="form"
sx={{
  '& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>

<ImageList sx={{ width: "100", height: "10rem", mb:0 }} cols={3} rowHeight={200}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  <div>
            <h2>Select from below payment options..</h2>
            <label>Payment type: 
                <select value={value} onChange={handleChange}>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Wallet">Wallet</option>
                    <option value="Debit Card">Debit Card</option>
                </select>
                </label>
                <p>Payment type selected: {value}</p>
                <p>Price for latest movie: INR 250</p>
            
            {/* <Button variant='contained' onClick={() =>{setCount(count + 1)}}>Add Tickets</Button>
            
            <br/>   */}
                      
            {/* <div>
            <label>Tickets: {count} </label><br/>
            <p>Please refresh page to reset tickets</p>
            </div> */}
            
          
            
            </div>
    
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Name"
        />

        <TextField
          required
          id="outlined-required"
          label="Wallet Id"
          type="password"
          defaultValue="Wallet ID"
        />
        
        <TextField
        required
          id="outlined-number"
          label="Wallet Password"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Date-Of-Birth(dd-mm-yyyy)"
        />

<TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Amount"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Credit/Debit Card Number"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="CVV"
          
        />
        
        
      </div>
      <Typography>All details shared by you will be kept secure. Please fill above details to complete payment</Typography>
     <Link to='/makepurchase'> <Button variant="contained" size="large" onClick={alertPurchase}>
          Make Payment
        </Button></Link>

          </Box>
  );
}
