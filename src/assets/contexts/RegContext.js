import { createContext ,useState} from "react";

export const RegContext = createContext({});
export const RegProvider=({children})=>{
const [ email, setEmail ] = useState('gist');
  const [ fullName, setFullName ] = useState('tope'); 
  const [submitted, setSubmitted] = useState(false);
  const [isLogin,setIsLogin] = useState(null);
  const [ isFirst,setIsFirst] = useState(true);
  let stateData ={
    email, setEmail,fullName, setFullName,submitted, setSubmitted,isLogin,setIsLogin,
    isFirst,setIsFirst
  }
  
 // end navivation code
    return (
      <div>
        <RegContext.Provider value= {stateData}>
            {children}
        </RegContext.Provider>
      </div>
    )
  }


