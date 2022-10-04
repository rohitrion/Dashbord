import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import FacebookLogin from 'react-facebook-login';
import {GoogleAPI,GoogleLogin} from 'react-google-oauth'
import SetCookie from "../cookie/SEt";
import GetCookie from "../cookie/Get";
import { Redirect } from "react-router-dom";
import Header from "../Header";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

  MDBIcon,
  MDBCheckbox
} from "mdb-react-ui-kit";


function Login() {

       
    const   navigate  = useNavigate();

   

   
 

      const [email, setemail]= useState("");
      const [password,setpass]= useState("");
   
      const   handleemail  = (e) =>{
            setemail(e.target.value)
      }

      const   handlepass = (e) =>{
           setpass(e.target.value)
      }
           

      const handleapi = ()=>{
      console.log({email,password})

      axios.post( 'https://beta-api.farmersfreshmeat.com/api/login',{

      email : email,
      password : password

      }).then(result=>{
        console.log(result)
       // console.log(result.data.response.token)

          
      localStorage.setItem('token', result.data.response.token )
      localStorage.setItem('email', result.data.response.email)
      { localStorage.getItem('email'  ) }
        { localStorage.getItem('token'  ) }
        //localStorage.setItem('email', result.data.response.email )
        navigate('/')
        SetCookie('token', (result.data.response.token))
        GetCookie('token' ,(result.data.response.token))
        
      //  SetCookie('token', (result.data.response.email))
        // alert('succesfully login ')

          
         


      }).catch(error=>{
      
      })


      }
 

    

   
      // const submitForm = () => {
      //   if (email === " " && password === " ") {
      //     alert("Fields are required");
      //    disable
      //     return;
      //   }
      //   else{
      //    navigate("/")
      //   }
      //   //props.login({ email, password });
      // };
     







  useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
    client_id: "76629634098-5epemtj0bsmbm6hfuh1ts71mlfpvlmkd.apps.googleusercontent.com",
    callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
    );
    }, []);

    function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);


      }




  const responseFacebook = (response) => {
    console.log(response);


  }

  const componentClicked = (data)=>{
    console.warn(data)
  }


  const CALLBACK = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
    
  return (





    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p  style={{   backgroundColor: '	rgb(184,184,184)' }} className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
               required
                 value={email}
             
                onChange={handleemail}




              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                required 
                value={password}

                onChange={handlepass}



              />

              <MDBCheckbox
                name="flexCheck"   
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />

              <MDBBtn size="lg"   onClick={handleapi}   
               
            
              >Login</MDBBtn>

              <hr className="my-4" />  

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
              >
                {/* <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google */}

            
<div className="App">
 <div id="signInDiv"></div>
</div>







              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                {/* <MDBIcon fab icon="facebook-f" className="mx-2" /> */}
                
                
    

                <     FacebookLogin
    appId="643316127404557"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />





              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>



  );
}

export default Login;
