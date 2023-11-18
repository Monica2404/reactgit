import React,{useState} from 'react';
const Statebool=()=>
{
    const [data,setData]=useState(false)
    const handshow=()=>
    {
        setData(!data)
    }
    return(
        <>
        <p>{data?'Hi':''}</p>
        <button onClick={handshow}>{data?'Hide':'Show'}</button>
        </>
    )
}
export default Statebool;