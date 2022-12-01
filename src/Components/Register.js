import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const theme = createTheme();

export default function Register() {

    //function to post user data to server
    const [user, setUser]= useState({
      name:'',  
      email:'',
      address:'',
      accountNo:'',  
      mobileNo:'',
      password:''
    });
    
        const postUserData = () => {
            
            axios
              .post('http://localhost:8080/user/add',
              {email: document.getElementById("emailr").value,
              mobileNo: document.getElementById("mobile").value,
              name:document.getElementById("name").value,
              address:document.getElementById("address").value,
              accountNo:document.getElementById("account").value,
              password:document.getElementById("passwordr").value,    
            })
            .then(response => setUser(response.data))
            .catch(err => console.log(err));
            console.log("data going to mySql database..");
            return user;
          }

          const sendDataToJson = () => {
            
            axios
              .post('http://localhost:3001/register',
              {email: document.getElementById("emailr").value,
              mobileNo: document.getElementById("mobile").value,
              name:document.getElementById("name").value,
              password:document.getElementById("passwordr").value,
              address:document.getElementById("address").value,
            })
            .then(response => setUser(response.data))
            .catch(err => console.log(err));
            console.log("data going to json..");
            return user;
          }
   

          
        //   function to validate registration details 
    function validationRegister(event) {
        
            let emailid= document.getElementById("emailr").value;
        let regemr = /^([a-z0-9!~_]{1,3})@([a-z0-9!~_]{1,2}).(com)$/;
        let mobr= document.getElementById("mobile").value;
        let regmobr = /^[7-9][0-9]{9}$/;
        let address=document.getElementById("address").value;
        let reguser= /^[a-z0-9]+$/i;
        let name=document.getElementById("name").value;
        let regnamer=/^[a-z]+$/i;
        let passr= document.getElementById("passwordr").value;
        let regpassr= /^[A-Za-z0-9@!~_]{6,}$/;
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
        if (reguser.test(address)) {
            document.getElementById("addressError").innerHTML="";
            // flagR=1;
        }
        else {
            document.getElementById("addressError").innerHTML="Address can only have letters and numbers";
            // flagR=0;
            
        }
        if (regpassr.test(passr)) {
            document.getElementById("passrerror").innerHTML="";
            // flagR=1;
        }
        else{
            document.getElementById("passrerror").innerHTML="Password must have atleast one capital letter, one small letter, one special symbol (@!~_), one number and the password length must be of atleast 6";
            // flagR=0;
            
        }
        if(regnamer.test(name)) {
            document.getElementById("nameerror").innerHTML="";
        }
        else{
            document.getElementById("nameerror").innerHTML="Name can't be empty";
        }
        if ( regemr.test(emailid) && regmobr.test(mobr) && regpassr.test(passr) && reguser.test(address) &&regnamer.test(name) ) {
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

    
    
    return(
      <Box style={{backgroundColor:"lightgray", marginTop:"0"}}>
                    <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Box
                sx={{
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon/>
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
              name="email"
              autoComplete="email"
              autoFocus
            />
                <label id="emailrerror" style={{color: "red"}}></label><br/> 
                <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
             <label id="nameerror" style={{color: "red"}}></label><br/> 
             <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus/>
                <label id="addressError" style={{color: "red"}}></label><br/>
                <TextField
              margin="normal"
              required
              fullWidth
              id="account"
              label="Account No."
              name="account"
              autoComplete="account"
              autoFocus/>
                    <label id="accError" style={{color: "red"}}></label><br/>
                    <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="mobile"
              autoComplete="mobile"
              autoFocus/>
                <label id="moberror" style={{color: "red"}}></label><br/>
                <TextField
              margin="normal"
              required
              fullWidth
              id="passwordr"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus/>
                    <label id="passrerror" style={{color: "red"}}></label><br/>
                    <Link to="/makepurchase" onClick={validationRegister} onSubmit={postUserData}><Button type="submit" onClick={postUserData} onsubmit={sendDataToJson} variant='contained' >Submit</Button></Link>
                    <Grid container>
              <Grid item xs>
              <Link to="/loginnew" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
                    </Box>                  
                    </Box>
                    </Container>
                    </ThemeProvider>
                    </Box>
    )
}
