import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from './Header';
import arrow from '../assets/images/arrow.png'
import verify from '../assets/images/verify.svg'
import { Link ,useNavigate} from 'react-router-dom';
  


function Complete() {
  
  
  
    
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);
    const navigate = useNavigate();
  
    const [token, setToken] = useCookies(['mr-token']);
    const navigateToReg = () => {
      // 👇️ navigate to /contacts
      navigate('/Register');
    };
  
    const navigateToHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };
  
    // useEffect( () => {
    //   if(token['mr-token']) window.location.href = '/Login';
    // }, [token])
  
    const loginClicked = () => {
      API.loginUser({email, password})
        // .then( resp => setToken('mr-token', resp.token))
        .then(result => console.log(result))
        .catch( error => console.log(error))
    }
    
    const isDisabled = email.length === 0 || password.length === 0;
  
    return (
      <div>
        <Header />
        <div className="bg-image p-tb-100 ">
        <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-78 p-b-54 box-radius text-center m-b-80'>
          <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700 m-nl-20'>Congratulations</span>
            <p className='fs-16 p-t-20 text-grey f-w-400'>Your account has been created <br /> successfully</p>
            
            <div className="  m-t-30">
            <img src={verify} alt="" className='img-box'/>
            </div>
          <div className="mb-3 p-lr-72">
          
           <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-50 f-w-700' type="button" value="Goto Login" onClick={loginClicked} disabled={isDisabled} /> 
            
           
            </div>
            <div className='f-w-700 m-t-55'>
              <span className='  float-start'>Privacy and Policy </span> 
              <span className='float-end'>FAQs</span>
            </div>
          </section>
        </div>
      </div>
    )
  }
  

export default Complete;
