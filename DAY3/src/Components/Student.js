import React from 'react';
const Student=({name,roll,gender,age,dept})=>{
    return(
        <>
        <center><h1>STUDENT PROFILE</h1></center>
        <table border="6px"  align="center" >
            <tr>
               <td><b>Name</b></td>
               <td>{name}</td>
            </tr>
            <tr>
               <td>R.No</td>
               <td>{roll}</td>
            </tr>
            <tr>
               <td>Gender</td>
               <td>{gender}</td>
            </tr>
            <tr>
               <td>Age</td>
               <td>{age}</td>
            </tr>
            <tr>
               <td>Department</td>
               <td>{dept}</td>
            </tr>
        </table>
        </>
    )
}
export default Student;