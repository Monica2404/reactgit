import React,{useState} from 'react';
 const StateString =()=>
 {
    const[data,setData]=useState("Hi")
    const handlegreet=()=>
    {
        setData("Hello")
    }
    return(
        <>
        <p>{data}</p>
        <button onClick={handlegreet}>Greek</button>
        </>
    )

 }
 export default StateString;