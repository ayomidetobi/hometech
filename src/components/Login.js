import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, {useState, useContext } from 'react';
import { API } from '../api-service';
import Header from '../components/Header';
import arrow from '../assets/images/arrow.png'
import {useNavigate} from 'react-router-dom';
import { RegContext } from '../assets/contexts/RegContext';

  


function Login() {
    const [ password, setPassword ] = useState('');
    const  { email, setEmail, setSubmitted } = useContext(RegContext);
    const {isNext,setIsNext} = useState(false)
    const [passerror, setPassError] = useState(false);
    const [emailerror, setEmailError] = useState(false);

    const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

    const navigate = useNavigate();

    const navigateToReg = () => {
      //  navigate to /Reg
      navigate('/Register');
    };
  
    const navigateToHome = () => {
      // 👇️ navigate to /index
      navigate('/');
    };
  
    const loginClicked = () => {
      API.loginUser({email, password})
        // .then( resp => setToken('mr-token', resp.token))
        .then(result => console.log(result))
        .catch( error => console.log(error))
        if ( !regularExpression.test(email)) {
          setEmailError(true)
        }
        if (password.length < 5 ) { 
          setPassError(true)
        }
        else {
          setSubmitted(true);
          setPassError(false)
          setEmailError(false)
        }
    }
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
        const emailerrorMessage = () => {
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
      <div>
        <Header />
        <div className="bg-image p-tb-50 ">
          <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-70 p-b-54 box-radius text-center m-b-80'>
            <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700'>Sign In to Continue</span>
              <p className='fs-16 p-t-10 text-grey f-w-400'>Fill in your details below to create an <br /> account with us</p>
            <div className='d-flex justify-content-around m-t-30 p-lr-40'>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>1</span>
              <span className='border-infos round-num text-blue bg-white fs-16 p-tb-5'>2</span>
              <span className='border-infos round-num text-blue bg-white fs-16 p-tb-5'>3</span>
            </div>
            <div className="mb-3 p-lr-72">
              <input className={emailerror ? 'border-danger w-100 text-danger bg-white  box-radius h-62 m-t-35  p-lr-20':' w-100 text-blue bg-white border-infos box-radius h-62 m-t-35  p-lr-20'} 
              type="text" 
              id='email'
              value={email}
              placeholder='Email address'
              onChange={ evt=> setEmail(evt.target.value)}/>
              <div className="messages">
                    {emailerrorMessage()}
                    
              </div>  
            </div>
          <div className="mb-3 p-lr-72">
            <input className={passerror ? 'border-danger w-100 text-danger bg-white  box-radius h-62 m-t-20  p-lr-20':' w-100 text-blue bg-white border-infos box-radius h-62 m-t-20  p-lr-20'} 
            type="password" 
            id='password'
            placeholder='password'
            value={password}
            onChange={ evt=> setPassword(evt.target.value)}/>
            <div className="messages">
                    {passerrorMessage()}
                    
            </div> 
              <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-55 f-w-700' type="button" value="Login" onClick={loginClicked}  /> 
              <p className='fs-16 p-t-20'>Already have an account <span className='text-blue'onClick={navigateToReg}>Sign in</span></p>
          
          </div>
            <div className='f-w-700 m-t-70'>
              <span className='  float-start'>Privacy and Policy </span> 
              <span className='float-end'>FAQs</span>
            </div>
          </section>
        </div>
      </div>
    )
  }
  

export default Login;
