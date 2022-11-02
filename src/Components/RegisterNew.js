import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const theme = createTheme();

export default function RegisterNew() {

    //function to post user data to server
    const [data, setData]= useState([]);
    
        const postUserData = () => {
            
            axios
              .post('http://localhost:3001/register',
              {email: document.getElementById("emailr").value,
              name: document.getElementById("username").value,
              address: document.getElementById("address").value,
              account: document.getElementById("account").value,
              mobile: document.getElementById("mobile").value,
            password: document.getElementById("passwordr").value})
            .then(response => setData(response.data))
            .catch(err => console.log(err));
            return data;
          }
   

          
        //   function to validate registration details 
    function validationRegister(event) {
        
        

        let emailid= document.getElementById("emailr").value;
        let regemr = /^([a-z0-9!~_]{1,3})@([a-z0-9!~_]{1,2}).(com)$/;
        let mobr= document.getElementById("mobile").value;
        let regmobr = /^[7-9][0-9]{9}$/;
        let username=document.getElementById("username").value;
        let reguser= /^[a-z]+$/i;
        let passr= document.getElementById("passwordre").value;
        let regpassr= /^[a-z0-9@!~_]+$/i;
        let flagR=1;  
         

        if (regemr.test(emailid)) {
            document.getElementById("emailrerror").innerHTML = " ";
            // flagR=1;
        }
        else {
            document.getElementById("emailrerror").innerHTML = "Invalid Email";
            // flagR=0;
            
        }
        if (regmobr.test(mobr)) {
            document.getElementById("moberror").innerHTML="";
            // flagR=1;
        }
        else {
            document.getElementById("moberror").innerHTML="Mobile number should be of 10 digits only";
            // flagR=0;
            
        }
        if (reguser.test(username)) {
            document.getElementById("usererror").innerHTML="";
            // flagR=1;
        }
        else {
            document.getElementById("usererror").innerHTML="Name can not be empty";
            // flagR=0;
            
        }
        if (regpassr.test(passr)) {
            document.getElementById("passrerror").innerHTML="";
            // flagR=1;
        }
        else{
            document.getElementById("passrerror").innerHTML="Password can't be empty";
            // flagR=0;
            
        }
        if ( regemr.test(emailid) && regmobr.test(mobr) && regpassr.test(passr) && reguser.test(username) ) {
            flagR=1;
        }
        else {
            event.preventDefault();
            flagR=0;
        }
        if (flagR) {
            alert("Registered successfully");
            return true;
        }
        else {
            return false;
            
        }
    }
    
    

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
                sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailr"
              label="Email Address"
              name="emailRegister"
              autoFocus
            />
             <label id="emailerror" style={{color:"red"}}></label><br></br>
             {/* <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Name"
              name="Name"
              autoFocus
            />
            <label id="usererror" style={{color: "red"}}></label><br/> */}
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Your Complete Address"
              name="Address"
              autoComplete="address"
              autoFocus
            />
            <label id="addresserror" style={{color: "red"}}></label><br/> */}
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="account"
              label="Account Number"
              name="Account Number"
              autoComplete="account number"
              autoFocus
            />
            <label id="accerror" style={{color: "red"}}></label><br/>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="Mobile Number"
              autoComplete="mobile number"
              autoFocus
            />
            <label id="moberror" style={{color: "red"}}></label><br/> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordr"
              label="Password"
              type="password"
              id="passwordre"
              autoComplete="current-password"
            />
            <label id="passerror" style={{color:"red"}} ></label><br></br>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to="/makepurchase" onClick={validationRegister}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
            >
              Sign Up
            </Button>
            </Link>
            <Grid container>
              
              <Grid item>
                <Link to="/loginnew" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
