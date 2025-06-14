import React from 'react'
import {useState,useEffect} from 'react'
import{useNavigate}from 'react-router-dom'
const SignUp = () =>{
    const [name,setName] = useState ("");
    const[password ,setPassword]= useState ("");
    const[email,setEmail] =useState ("");
    const navigate = useNavigate();
    
    const collectData =async () =>{
        console.log(name, email ,password,)
        let result = await fetch('http://localhost:5000/apiuser/user',
            {
                method:'post',
                body:JSON.stringify ({name,email,password}),
                headers:{
                    'Content-Type':'application/json'
                },
            }
        )
        result= await result.json()
        console.log(result)
        
        if (result) {
            localStorage.setItem("user",JSON.stringify(result.result))
              localStorage.setItem("token",JSON.stringify(result.auth))
            navigate('/')
        }

        }
    return (
        <div>
            <h1>Rigster</h1>
            <input className ='inputBox' type ='text' 
            value={name} onChange={(e) =>setName(e.target.value)} placeholder='Enter Name'/>
           
            <input className ='inputBox' type = "text"
           value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Enter Email'/>
           
            <input className ='inputBox' type ='password'
            value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='Enter Password'/>
           
            <button onClick={collectData} type='button' className='signButton'> SignUp</button>
        </div>
    )
}
export default SignUp;