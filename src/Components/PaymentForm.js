import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ImageList, Typography } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';




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
    
      function paymentComplete(event) {
        alert("Your payment has been completed! You will now be directed to Purchase Section");
        event.preventDefault();
        window.location.replace("/makepurchase");
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

<ImageList sx={{ width: "300", height: "135 " }} cols={3} rowHeight={200}>
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
          defaultValue="Date-Of-Birth"
        />
    
        
      </div>
      <Typography>All details shared by you will be kept secure. Please fill above details to complete payment</Typography>
      <Button variant="contained" size="large" onClick={paymentComplete}>
          Make Payment
        </Button>

          </Box>
  );
}
