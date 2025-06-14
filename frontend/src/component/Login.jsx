import React, { useEffect } from 'react'
import{useNavigate} from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
const [email,setEmail] = useState ('');
const[password,setPassword] = useState ('')
const navigate = useNavigate() ;

    const handleLogin= async() =>
         {
        console.warn(email,password)
        let result= await fetch  ('http://localhost:5000/apiuser/user',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
result = await result.json();
console.log(result)
if(result.auth){
localStorage.setItem('user',JSON.stringify(result.user));
localStorage.setItem('token',JSON.stringify(result.auth));
navigate('/')
}
else{
    alert("please enter correct detail")
}
    }
    
    return (

        <div className='login'>
            <input type='text' value={email} onChange={(e) =>setEmail (e.target.value)} className= 'inputBox' placeholder='enter email'/>
           <input type='password' value={password} onChange={(e) =>setPassword (e.target.value)} className= 'inputBox' placeholder='enter password'/>
           <button onClick={handleLogin} className='signButton'  type='button'>Login</button>
        </div>
    )
}
export default Login;