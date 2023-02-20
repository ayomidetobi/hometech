import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useContext } from 'react';
import { RegContext } from '../assets/contexts/RegContext';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from '../components/Header';
import arrow from '../assets/images/arrow.png'
import { Link ,useNavigate} from 'react-router-dom';
import RegColor from './RegColor';
  


function Auth() {
    const  { email, setEmail,fullName, setFullName,submitted, setSubmitted } = useContext(RegContext);
    const  [password,setPassword ] = useState('');
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
              navigateToRegCol() 
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
      <>
        <Header />

        <div className="bg-image p-tb-40 ">
          <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-52 p-b-54 box-radius text-center m-b-80'>
            <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700'>Create an Account</span>
              <p className='fs-16 p-t-10 text-grey f-w-400'>Fill in your details below to create an <br /> account with us{email}</p>
            <div className='d-flex justify-content-around m-t-30 p-lr-72'>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>1</span>
              <span className='border-infos round-num text-blue bg-white fs-16 p-tb-5'>2</span>
              <span className='border-infos round-num text-blue bg-white fs-16 p-tb-5'>3</span>
            </div>
            <div className="mb-3 p-lr-72">
                <input className={error ? 'border-danger w-100 text-danger bg-white  box-radius h-62 m-t-35  p-lr-20':' w-100 text-blue bg-white border-infos box-radius h-62 m-t-35  p-lr-20'} 
                type="text" 
                id='fullName'
                value={fullName}
                placeholder='Full Name'
                onChange={handleName}/> 
                
                  {/* Calling to the methods */}
                <div className="messages">
                  {errorMessage()}
                  
                </div>
              </div>
              <div className="mb-3 p-lr-72">
                <input className={ emailerror ? 'border-danger w-100 text-danger bg-white  box-radius h-62  p-lr-20':' w-100 text-blue bg-white border-infos box-radius h-62  p-lr-20 '}
                type="email" 
                id='email'
                value={email}
                placeholder='Email address'
                onChange={ handleEmail}/>
                <div className="messages">
                  {emailrrorMessage()}
                  
                </div> 
              </div>
              <div className="mb-3 p-lr-72">
                <input className={passerror ? 'border-danger w-100 text-danger bg-white  box-radius h-62  p-lr-20':' w-100 text-blue bg-white border-infos box-radius h-62  p-lr-20' }
                type="password" 
                id='password'
                placeholder='password'
                value={password}
                onChange={handlePassword}/>
                <div className="messages">
                  {passerrorMessage()}
                  
                </div>
                <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-40 f-w-700' type="button" value="Next" onClick={registerClicked}  /> 
              </div>
                <p className='fs-16 p-b-40'>Already have an account? <span className='text-blue'onClick={navigateToLogin}>Sign in</span></p>
              <div className='f-w-700'>
                <span className='  float-start'>Privacy and Policy </span> 
                <span className='float-end'>FAQs</span>
              </div> 
          </section>
        </div>
         
        
        
        
      </>
    )
  }
  

export default Auth;
