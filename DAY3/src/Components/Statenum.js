import React,{useState} from 'react';
const Statenum=()=>
{
    const[data,setData]=useState(0)
    const handlered=()=>
    {
        setData(data-1)
    }
    const handleadd=()=>
    {
        setData(data+1)
    }
    return (
        <>
        <button onClick={handlered}> - </button>
        <button>{data}</button>
        <button onClick={handleadd}>+</button>
        </>

    )
}
export default Statenum