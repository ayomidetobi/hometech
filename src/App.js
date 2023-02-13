
import '../src/assets/css/newhelper.css'
import '../src/assets/css/style.css'
import Header from './components/Header';
import { useNavigate} from 'react-router-dom';
import { RegContext } from './assets/contexts/RegContext';
import { useState } from 'react'; 


function App() {
  // begin navivation code
    const navigate = useNavigate();
    
    const navigateToLogin = () => {
      navigate('/Login');
    };
  
    const navigateToRegister = () => {
      navigate('/Register');
    };
  // end navivation code
    
    
    return (
      <div>
        
        <Header />
        <div className="bg-image p-tb-150 ">
          <section className='w-30 mx-auto d-block bg-white p-lr-72 p-t-70 p-b-54 box-radius text-center m-b-80'>
              <p className='text-blue fs-24 f-w-700'>Welcome to HomeTech</p>
              <p className='fs-16 p-t-10 text-grey f-w-400'>We protect your credentials from any form of <br /> shoulder surfing attacks</p>
            <div className="mb-3">
              <input className='w-100 text-white bg-blue border-0 box-radius h-62 m-t-55 f-w-700' type="button" value="Register" onClick={navigateToRegister} /> 
            </div>
            <div className="mb-3">
              <input className='w-100 text-blue bg-white border-blue box-radius h-62 m-t-20 f-w-700' type="button" value="Sign In" onClick={navigateToLogin}/>
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
  

export default App;
