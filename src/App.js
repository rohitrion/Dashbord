import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Data from './components/Data';
import LOgin from './components/log/LOgin';


import {
  BrowserRouter as Router,
  Switch,
  Routes,

  Route,
  useNavigate ,
  Link
} from "react-router-dom";
import { useEffect } from 'react';





function App() {

  const   navigate  = useNavigate();

     const  auth =   localStorage.getItem('token')
        useEffect(()=>{
          if(!localStorage.getItem('token')){
             navigate('/login')
             // this.$router.replace({'/'})
          }
        },[])

  return (
   <>

  
 



      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

      <Routes>



      



  <Route exact path="/" element={<> <Header/>
 <Sidebar/>
 <Footer/> </>}/>

  
    
      <Route path="/login" element={     <LOgin/> } />


         

          </Routes>
      
      
          <button id='fix'   
onClick={()=>{
       localStorage.removeItem('token')
       navigate('/login')
   }}>Logout        </button>


   </>
  );
}

export default App;
