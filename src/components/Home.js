import '../assets/css/newhelper.css';
import '../assets/css/style.css';
import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import Header from '../components/Header';
import { useNavigate} from 'react-router-dom';
  


function Home() {
  
  
  
    
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

    return (
      <div>
        <Header />
        <div className="bg-image p-tb-60 ">
          <section className=' mx-auto d-block   p-t-195 p-b-54 text-center m-b-80 p-b-200'>
          <span className='text-white fs-32 f-w-700'>Welcome</span>
            <p className='fs-72 p-t-40 text-white f-w-800'>Ahmed Rufai</p>
            
          
          <div className="mb-3 p-lr-72 w-30 d-block mx-auto ">
         
           <input className='w-100 text-white  border-white box-radius h-62 m-t-75 f-w-700 bg-trans ' type="button" value="Goto Login"   /> 
            </div>
           
          </section>
        </div>
      </div>
    )
  }
  

export default Home;
