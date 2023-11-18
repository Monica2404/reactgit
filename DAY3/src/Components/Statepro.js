import React,{useState} from 'react';
import '../Assets/style.css';
const Statepro=()=>
{
    const [data,setData]=useState(false)
    const handshow=()=>
    {
        setData(!data)
    }
    return(
        <>
        <p>{data?'Hi':''}</p>
        <button onClick={handshow}className={data?'green':'red'}>{data?'Hide':'Show'}</button>
        </>
    )
}
export default Statepro;