import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Instrcut from './Instruct';


export default function Login() {


  //code to validate login credentials

   function LoginValidate (event) {
    

    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let regem = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,8})(.[a-z]{2,8})?$/;
    let regpass = /[a-z0-9]+/i;
    let flag = 0;

    if (regem.test(email)) {
      document.getElementById("emailerror").innerHTML = "";
      flag = 1;
    }
    else {
      document.getElementById("emailerror").innerHTML = "Incorrect Email";
      flag = 0;
      
    }
    if (regpass.test(password)) {
      document.getElementById("passerror").innerHTML="";
      flag= 1;
      
    }
    else {
      document.getElementById("passerror").innerHTML= "Incorrect Password";
      flag= 0;
      
    }
    if (flag) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
      
      
    } 
    
  };

  // code to match data with server
  const [logind,setLogind] = useState([]);

  useEffect(() => {
    console.log("data not found")
},[logind]);


    const matchLogin =(event) => {
      axios.get("http://localhost:3001/register")
    .then((resp) => {
      console.log(resp);
      setLogind(resp.data)
    }).catch((error) => document.write("can't fetch data"));

  
    
      if (document.getElementById("email") === logind.email) {
        document.getElementById("emailmatch").innerHTML= "email matched from database";
      }
      else {
        document.getElementById("emailmatch").innerHTML= "email not found in database";
      }
      
      if(document.getElementById("pwd") === logind.password) {
        document.getElementById("passmatch").innerHTML= "password matched from database";
      }
      else {
        event.preventDefault();
        document.getElementById("passmatch").innerHTML= "password not found in database";
        
      }
    }

    
    

    return (

      
        
        <Box style={{backgroundColor:"purple", color:"white"}}>
            <Instrcut/>
            
            <form onSubmit= {LoginValidate} action="/makepurchase">
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" style={{backgroundColor:"pink"}}/>
    <label id="emailerror" style={{color:"red"}}></label><br></br>
    <label id="emailmatch" ></label><br></br>
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" style={{backgroundColor:"pink"}}/>
    <label id="passerror" style={{color:"red"}} ></label><br></br>
    <label id="passmatch" ></label><br></br>
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  
  <Button type="submit" variant="contained" >Submit</Button>
  <Button variant='contained' onClick={matchLogin}>show result</Button>
  
</form>
        </Box>
        
        
    )
}