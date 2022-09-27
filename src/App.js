import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,
Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import "./App.css";
import Footer from './Components/Footer';
import Cinema from './Components/Cinema';
import MakePurchase from './Components/MakePurchase';
import SpotCash from './Components/SpotCash';
import PaymentForm from './Components/PaymentForm';




function App() {

  
  return (
    <div>
   <Header/>
   <h3>Please start with Login..</h3>

{/* Creating routes here */}
   <Router>
          <div>
            <Routes>
      <Route exact path = '/login' element = {<Login />}></Route>
      <Route exact path = '/register' element = {<Register />}></Route>
      <Route exact path = '/drawcash' element = {<SpotCash />}></Route>
      <Route exact path = '/cinema' element = {<Cinema />}></Route>
      <Route exact path = '/makepurchase' element = {<MakePurchase />}></Route>
      <Route exact path = '/makepayment' element = {<PaymentForm />}></Route>
      
        
      </Routes>
          </div>
        </Router>
        <Footer/>
        
        
        
   </div>
  );
}

export default App;
