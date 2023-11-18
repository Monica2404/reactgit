import '../Assets/style1.css';
import React,{useState} from 'react';
import  {Award} from 'lucide-react';
import {Toaster,toast} from 'react-hot-toast';
const App2=()=>
{
    const[form,setForm]=useState({
        name:'',
        email:'',
        number:0,
        username:'',
        password:''
    })
    const handlechange=(e)=>
    {
        setForm({...form,[e.target.id]:e.target.value})
        console.log('event triggered')
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault()
        console.log(form)
        toast.success('Successfully toasted!')
    }

    return(
        <>
        <form className="form-container" onSubmit={handlesubmit}>
           <h1 align="center">STUDENTS DETAILS</h1>
     
           <input type="text" name=""id="name"placeholder="Name" className="fx1" onChange={handlechange} value={form.name}></input>
           
           <input type="email" name=""id="email"placeholder="Email"className="fx1" onChange={handlechange}value={form.email}></input>
           
           <input type="number"name=""id="number" placeholder="number" className="fx1"onChange={handlechange}value={form.number}></input>
       
           <input type="text"name=""id="username" placeholder="Username" className="fx1" onChange={handlechange}value={form.username}></input>
        
           <input type="password" name=""id="password"placeholder="Password"className="fx1" onChange={handlechange}valur={form.password}></input>
          
           <button type="submit" className="fx2"><Award />Register</button>
           </form>
           <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </>
    )
}
export default App2;