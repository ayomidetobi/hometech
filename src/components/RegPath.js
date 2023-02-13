import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from './Header';
import arrow from '../assets/images/arrow.png'
import fox from '../assets/images/fox.png'
import { Link ,useNavigate} from 'react-router-dom';
  


function RegPath() {
  const [imgPattern,setImgPattern] = useState ([]);
  const email='stephen@gmail.com';
  const choosePathClick = (newPath) => {
    setImgPattern([...imgPattern.slice(0,2),newPath]);
    console.log(newPath);
 

}

  const navigate = useNavigate();
  const navigateToReg = () => {
    // 👇️ navigate to /contacts
    navigate('/Register');
  };

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  const nextClicked = () => {
    API.imagepath({imgPattern,email})
      
      .then(result => console.log(result))
      .catch( error => console.log(error))
      
      console.log(imgPattern)
  }

  
    return (
      <div>
        <Header />
        <div className="bg-image p-tb-20 ">
          <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-40 p-b-54 box-radius text-center m-b-80'>
          <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700'>Select Your Image Pattern</span>
            <p className='fs-16 p-t-10 text-grey f-w-400'>Please select three image Sequence to <br /> complete your registration</p>
            <div className='d-flex justify-content-around m-t-30 p-lr-40'>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>1</span>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>2</span>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>3</span>
            </div>
            <div className="  m-t-20">
            <div className="row g-1">
                <div className="col-4 ">
                <div className="p-1 "><img src={fox} alt="" className='img-wrap' onClick={ ()=> choosePathClick('1')}/></div>
                </div>
                <div className="col-4">
                <div className="p-1"><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('2')}/></div>
                </div>
                <div className="col-4 ">
                <div className="p-1"><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('3')}/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2 "><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('4')}/></div>
                </div>
                <div className="col-4">
                <div className="p-2"><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('5')}/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2"><img src={fox} alt="" className='img-wrap 'onClick={ ()=> choosePathClick('6')}/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2 "><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('7')}/></div>
                </div>
                <div className="col-4">
                <div className="p-2"><img src={fox} alt="" className='img-wrap'onClick={ ()=> choosePathClick('8')}/></div>
                </div>
                <div className="col-4 ">
                <div className="p-2"><img src={fox} alt="" className='img-wrap' onClick={ ()=> choosePathClick('9')}/></div>
                </div>
            </div>
            </div>
        <div className="mb-3 p-lr-72">
            <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-20 f-w-700' type="button" value="submit" onClick={nextClicked} /> 
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
  

export default RegPath;
