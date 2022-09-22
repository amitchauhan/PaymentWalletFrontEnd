import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Register() {

    //function to post user data to server
    const [data, setData]= useState([]);
    
        const postUserData = () => {
            
            axios
              .post('http://localhost:3001/register',
              {email: document.getElementById("emailr").value,
            password: document.getElementById("passwordr").value})
            .then(response => setData(response.data))
            .catch(err => console.log(err))
          };
   

          
        //   function to validate registration details 
    function validationRegister(event) {
        
        

        let emailid= document.getElementById("emailr").value;
        let regemr = /^([a-z0-9!~_]{1,3})@([a-z0-9!~_]{1,2}).(com)$/;
        let mobr= document.getElementById("mobile").value;
        let regmobr = /^[7-9][0-9]{9}$/;
        let username=document.getElementById("username").value;
        let reguser= /^[a-z]+$/i;
        let passr= document.getElementById("passwordr").value;
        let regpassr= /^[a-z0-9@!~_]+$/i;
        let flagR=1;  
         

        if (regemr.test(emailid)) {
            
            document.getElementById("emailrerror").innerHTML = " ";
            flagR=1;
        }
        else {
            document.getElementById("emailrerror").innerHTML = "Invalid Email";
            flagR=0;
        }
        if (regmobr.test(mobr)) {
            document.getElementById("moberror").innerHTML="";
            flagR=1;
        }
        else {
            document.getElementById("moberror").innerHTML="Mobile number should be of 10 digits only";
            flagR=0;
        }
        if (reguser.test(username)) {
            document.getElementById("usererror").innerHTML="";
            flagR=1;
        }
        else {
            document.getElementById("usererror").innerHTML="Name can not be empty";
            flagR=0;
        }
        if (regpassr.test(passr)) {
            document.getElementById("passrerror").innerHTML="";
            flagR=1;
        }
        else{
            document.getElementById("passrerror").innerHTML="Password can't be empty";
            flagR=0;
        }
        if (flagR) {
            alert("Registered successfully");
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    
    return(
        <div style={{backgroundColor:"purple", color:"white"}}>

            <div>
                <div className='App'>
                <h1>Register</h1><hr/>
                <form onSubmit={validationRegister}  action="/home">

                    <input id="emailr" placeholder="Email-ID" type="email"/><br/>
                    <label id="emailrerror" style={{color: "red"}}></label><br/> 
                    <input id="username" placeholder="Name" type="text"/><br/>
                    <label id="usererror" style={{color: "red"}}></label><br/>
                    <input id="address" placeholder="Your Complete Address" type="text"/><br/>
                    <label id="addresserror" style={{color: "red"}}></label><br/>
                    <input id="account" placeholder="Account Number" type="text"/><br/>
                    <label id="accerror" style={{color: "red"}}></label><br/>
                    <input id="mobile" placeholder="Mobile number" type="text"/><br/>
                    <label id="moberror" style={{color: "red"}}></label><br/>
                    <input id="passwordr" placeholder="Create Password" type="text"/><br/>
                    <label id="passrerror" style={{color: "red"}}></label><br/>
        
                    <Button type="submit" variant='contained' >Submit</Button>
                    </form><br/>
                    
                    <Button variant='contained' onClick={postUserData}>Post data</Button>
                </div>
                </div>
        </div>
    )
}
