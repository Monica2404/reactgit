import '../assets/css/Create.css';
//import {Award} from 'lucide-react';
function form ()
{
    return(
        <div className="form-container">
           <h1 align="center">STUDENTS DETAILS</h1>
           <labeL>Name</labeL>
           <input type="text" placeholder="Name" className="fx1"></input>
           <labeL>Email</labeL>
           <input type="email" placeholder="Email"className="fx1"></input>
           <labeL>Phone</labeL>
           <input type="number" placeholder="number" className="fx1"></input>
           <labeL>Username</labeL>
           <input type="text" placeholder="Username" className="fx1"></input>
           <labeL>Password</labeL>
           <input type="password" placeholder="Password"className="fx1"></input>
           <input type="submit"value="Register" className="fx2"></input>
        </div>
    )
}
export default form;