import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,
Route, Routes} from 'react-router-dom';
import Register from './Components/Register';
import "./App.css";
import Footer from './Components/Footer';
import Cinema from './Components/Cinema';
import MakePurchase from './Components/MakePurchase';
import SpotCash from './Components/SpotCash';
import PaymentForm from './Components/PaymentForm';
import LoginNew from './Components/LoginNew';
import { Box } from '@mui/material';
// import ImageList from './Components/ImageList';


function App() {

  
  return (
    <div>
      
   <Header/>
   
{/* Creating routes here */}
<Box 
// style={{backgroundImage:"url('https://wallpaperaccess.com/full/4839516.jpg')",
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat',
// mt:0,
// display:"flex",
// justifyContent:"center"
// }}
>

  
   <Router>
          <div>
            <Routes>
      <Route exact path = '/loginnew' element = {<LoginNew />}></Route>
      <Route exact path = '/register' element = {<Register />}></Route>
      <Route exact path = '/drawcash' element = {<SpotCash />}></Route>
      <Route exact path = '/cinema' element = {<Cinema />}></Route>
      <Route exact path = '/makepurchase' element = {<MakePurchase />}></Route>
      <Route exact path = '/makepayment' element = {<PaymentForm />}></Route>
      
        
      </Routes>
          </div>
        </Router>
                </Box>
                
                <hr></hr>
        <Footer/>                 
   </div>
  );
}

export default App;
