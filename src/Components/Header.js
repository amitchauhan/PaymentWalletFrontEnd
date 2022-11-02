import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import {Link} from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';




export default function Header() {

    // creating functions to navigate to different pages

    const goToLogin = (event) => {
        event.preventDefault();
      window.location.replace("/loginnew");
    }


    const goToHome = (event) => {
        event.preventDefault();
      window.location.replace("/home");
    }

  return (
    <Box sx={{ flexGrow: 1, mb:0 }}>
      <AppBar position="static">
        <Toolbar>
       <Button onClick={goToHome}><img src='https://bankingstars.co.uk/wp-content/uploads/2020/04/Natwest.png' alt='Natwest logo'  height="80" width="80" style={{borderRadius:  20}}/></Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Natwest Payment Wallet
          </Typography>
          <Button color="inherit" onClick={goToLogin}><LockIcon></LockIcon>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
