import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from './Header';
import arrow from '../assets/images/arrow.png'
import fox from '../assets/images/fox.png'
import car from '../assets/images/car.png'
import field from '../assets/images/field.png'
import bird from '../assets/images/bird.png'
import road from '../assets/images/road.png'
import space from '../assets/images/space.png'
import tech from '../assets/images/tech.png'
import shelf from '../assets/images/shelf.png'
import student from '../assets/images/student.png'
import { Link ,useNavigate} from 'react-router-dom';
  


function RegImage() {
  
  
  
    
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
        <div className="bg-image p-tb-20 ">
          <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-40 p-b-54 box-radius text-center m-b-80'>
          <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700'>Select Your Color Combination</span>
            <p className='fs-16 p-t-10 text-grey f-w-400'>Please select the colors below according <br /> to your choice</p>
            <div className='d-flex justify-content-around m-t-30 p-lr-40'>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>1</span>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>2</span>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>3</span>
            </div>
            <div className="  m-t-20">
            <div className="row g-3">
                <div className="col-4 ">
                <div className="p-2 "><img src={fox} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4">
                <div className="p-2"><img src={car} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2"><img src={field} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2 "><img src={bird} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4">
                <div className="p-2"><img src={space} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2"><img src={road} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2 "><img src={student} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4">
                <div className="p-2"><img src={tech} alt="" className='img-wrap'/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2"><img src={shelf} alt="" className='img-wrap'/></div>
                </div>
            </div>
            </div>
          <div className="mb-3 p-lr-72">
          
           <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-20 f-w-700' type="button" value="Next" onClick={loginClicked} disabled={isDisabled} /> 
            
           
            </div>
            <div className='f-w-700 m-t-30'>
              <span className='  float-start'>Privacy and Policy </span> 
              <span className='float-end'>FAQs</span>
            </div>
          </section>
        </div>
      </div>
    )
  }
  

export default RegImage;
