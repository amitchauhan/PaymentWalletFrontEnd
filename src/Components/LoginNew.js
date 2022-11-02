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
import axios from "axios";
import {useState, useEffect} from 'react';



const theme = createTheme();

export default function LoginNew() {

  const [logind,setLogind] = useState([]);

  useEffect(() => {
    console.log("useEffect here")
},[]);

  const matchLogin =(event) => {
    axios.get("http://localhost:8080/user/getallusers")
  .then((resp) => {
    console.log(resp);
    setLogind(resp.data);
    console.log("data coming from mysql db..")
  }).catch((error) => console.log("can't fetch data"));

    if (document.getElementById("email") === logind.email ) {
      console.log(logind[0].email);
      document.getElementById("emailmatch").innerHTML= "email matched from database";
    }
    else {
      document.getElementById("emailmatch").innerHTML= "email not found in database";
    }
    
    if(document.getElementById("pwd") === logind[0].password ) {
      console.log(logind[0].password);
      document.getElementById("passmatch").innerHTML= "password matched from database";
    }
    else {
      event.preventDefault();
      document.getElementById("passmatch").innerHTML= "password not found in database";
      
    }
  }

  
    function LoginValidate (event) {
    

        let email = document.getElementById("email").value;
        let password = document.getElementById("pwd").value;
        let regem = /^([a-zA-Z0-9.-]{3})@([a-zA-Z0-9-]+).([a-zA-Z]{2,8})(.[a-z]{2,8})?$/;
        let regpass = /[a-z0-9]+/i;
        let flag = 0;
    
        if (regem.test(email)) {
          document.getElementById("emailerror").innerHTML = "";
          flag = 1;
        }
        else {
          document.getElementById("emailerror").innerHTML = "Incorrect Email";
          flag = 0;
          event.preventDefault();
          
        }
        if (regpass.test(password)) {
          document.getElementById("passerror").innerHTML="";
          flag= 1;
          
        }
        else {
          document.getElementById("passerror").innerHTML= "Incorrect Password";
          flag= 0;
          event.preventDefault();
          
        }
        if (flag) {
          return true;
        }
        else {
          event.preventDefault();
          return false;
          
          
        } 
        
      };

      // const myStyle={
      //   backgroundColor:"gray",
      //   color:"black",
      //   marginTop:0
      // };
     

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"
      
      >
        <CssBaseline />
        <Box  >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1,  }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              />
             <label id="emailerror" style={{color:"red"}}></label><br></br>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="pwd"
              autoComplete="current-password"
               />
            <label id="passerror" style={{color:"red"}} ></label><br></br>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to="/makepurchase" onClick={LoginValidate}>
            <Button
            onClick={matchLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:"red" }} 
            >
              Sign In
            </Button>
            </Link>
            <Grid container>
              <Grid item xs >
              <Link to="/register" variant="body2" >
                  {"Forgot Password? Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
