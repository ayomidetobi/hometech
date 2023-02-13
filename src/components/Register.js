import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useContext } from 'react';
import { RegContext } from '../assets/contexts/RegContext';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from '../components/Header';
import { FontAwesomeIcon } from '../@fortawesome/react-fontawesome'
import arrow from '../assets/images/arrow.png'
import { Link ,useNavigate} from 'react-router-dom';
import RegColor from './RegColor';
import Auth from './Auth';
  


function Register() {
  
  
  
    
    const  [password,setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fullName, setFullName ] = useState(''); 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [passerror, setPassError] = useState(false);
    const [emailerror, setEmailError] = useState(false);
    const navigate = useNavigate();
    const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    
    
    
    const navigateToLogin = () => {
      //  navigate to /login
      navigate('/Login');
    };
    const navigateToHome = () => {
      //  navigate to /index
      navigate('/');
    };
    const navigateToRegCol = () => {
      //  navigate to /index
      
      navigate('/RegColor',);
    };
    const registerClicked = () => {
        API.registerUser({ fullName, email, password})
            .then(result => console.log(result))
            .catch( error => console.log(error))
            // validation
            if (fullName.length < 3 ) { 
              setError(true)
            }
            if ( !regularExpression.test(email)) {
              setEmailError(true)
            }
            if (password.length < 5 ) { 
              setPassError(true)
            }
            
            else {
              setSubmitted(true);
              setError(false);
              setPassError(false);
              setEmailError(false);
              
              
              
            }
            
      }
      
      
     // Handling the name change
    const handleName = (e) => {
      setFullName(e.target.value);
      setSubmitted(false);
    };
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
    // Showing success message
    const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <span>User {fullName} successfully registered!!</span>
      </div>
    );
  };

  // Showing error message if fullname error is true
  const errorMessage = () => {
    return (
      
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1 className='fs-11 text-danger p-t-7 text-start'>enter Valid Full name</h1>
      </div>
    );
      };
        // Showing error message if password error is true
      const passerrorMessage = () => {
        return (
          
          <div
            className="passerror"
            style={{
              display: passerror ? '' : 'none',
            }}>
            <h1 className='fs-11 text-danger p-t-7 text-start'> password is less than 5 character</h1>
          </div>
        );
          }; 
            // Showing error message if email error is true
          const emailrrorMessage = () => {
            return (
              
              <div
                className="passerror"
                style={{
                  display: emailerror ? '' : 'none',
                }}>
                <h1 className='fs-11 text-danger p-t-7 text-start'>Enter a Valid Email</h1>
              </div>
            );
              }; 
      
    return (
      
        
        <RegContext.Provider value= {{email,setEmail}}>
        { submitted ? <RegColor/> : <Auth />
        }
        </RegContext.Provider>
      
    );
  }
  

export default Register;
