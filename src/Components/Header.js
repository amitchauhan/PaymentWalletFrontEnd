import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';




export default function Header() {

    // creating functions to navigate to different pages

    const goToLogin = (event) => {
        event.preventDefault();
      window.location.replace("/login");
    }

    const goToRegister = (event) => {
        event.preventDefault();
      window.location.replace("/register");
    }

    const goToHome = (event) => {
        event.preventDefault();
      window.location.replace("/home");
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       <Button onClick={goToHome}><img src='https://www.designmantic.com/blog/wp-content/uploads/2017/09/natwest-logo.jpg' alt='Natwest logo'  height="80" width="80"/></Button>
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
          <Button color="inherit" onClick={goToLogin}>Login</Button>
          <Button color="inherit" onClick={goToRegister}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
