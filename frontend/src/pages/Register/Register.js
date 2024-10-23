import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../apiUrl/apiUrl'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {

    const navigate = useNavigate()
   
     const [username,setUsername] = useState("")
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")

    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/auth/register`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({username,email,password})
            })

            const data = response.json();
            
            if(response.ok){
                console.log(data);
                alert('Registered Succesfully')
                navigate('/login')
                setEmail("")
                setPassword("")
            }
        }catch(err){
            console.log('Registered Failed',err)
            alert('Registration Failed')
        }

    }

    return (
        <div>
            <center>
            <form onSubmit={submitHandler} autoComplete='off'>
            <h1>Register</h1>
            <input type="text" value={username} placeholder="Enter Username" name="username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
            <input type="email" value={email} placeholder="Enter E-mail" name="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type="password" value={password} placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button type="submit" className='button'>Submit</button><br/><br/>
            <p>Already have an account...? <Link to="/login">Log In</Link></p>
            </form>
            </center>
        </div>
    )
}

export default Register;