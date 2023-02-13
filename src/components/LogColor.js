import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState } from 'react';
import { API } from '../api-service';
import Header from './Header';
import { ReactDOM } from 'react-dom/client';
import arrow from '../assets/images/arrow.png'
import { useNavigate} from 'react-router-dom';
  


function LogColor(props) {
    const [colorCombination,setColorCombination] = useState ([]);
    const email='stephen@gmail.com';
    const addColorClick = (newColor) => {
      setColorCombination([...colorCombination.slice(0,2),newColor]);
      console.log(newColor);
   

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
      API.logcombo({colorCombination,email})
        
        .then(result => console.log(result))
        .catch( error => console.log(error))
        console.log(colorCombination)
    }

    return (
      <div>
        <Header />
        <div className="bg-image p-tb-50 ">
          
          <section className='w-30 mx-auto d-block bg-white p-lr-40 p-t-70 p-b-54 box-radius text-center m-b-80'>
          <img src={arrow} alt="" className='float-start' onClick={navigateToHome} /><span className='text-blue fs-24 f-w-700'>Select Your Color Combination</span>
            <p className='fs-16 p-t-10 text-grey f-w-400'>Please select the colors below according <br /> to your choice</p>
            <div className='d-flex justify-content-around m-t-30 p-lr-40'>
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>1</span>
              
              <span className='border-infos round-num text-white bg-blue fs-16 p-tb-5'>2</span>
              <span className='border-infos round-num text-blue bg-white fs-16 p-tb-5'>3</span>
            </div>
            <div className='d-flex justify-content-around m-t-60 p-lr-40 m-b-70'>
              <span className=' round-col bg-purple'  onClick={()=> addColorClick('#115FDB')}></span>
              <span className=' round-col bg-pink' onClick={()=> addColorClick('#F65B2B')}></span>
              <span className=' round-col bg-orange' onClick={()=> addColorClick('#115FDB')}></span>
            </div>
          <div className="mb-3 p-lr-72">
          
           <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-55 f-w-700' type="button" value="Next" onClick={nextClicked}  /> 
            <p className='text-blue f-w-700 m-t-20'onClick={navigateToReg}>Reset</p>
          
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
  

export default LogColor;

