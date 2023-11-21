import React, {useState} from "react";
import { Box, Button,TextField, Typography } from "@mui/material";
import '../Assests/st.css';
const Login=() => {
  const[isSignup, setIsSignUp]=useState(false);
  console.log(isSignup);
  function change(v){
      v.preventDefault();
  }
  return (
    <div className='container1'>
       <form onSubmit={change}>
        <div className='contain1'>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        
        
        
        
        >
          <Typography variant="h2" padding={3} textAlign="center" sx={{fontFamily:'serif'}}>
            {isSignup ? "Signup" : "Login" }
          </Typography>
          {isSignup && (
           <TextField
          margin="normal"
          type={"text"}
          variant="outlined"
          placeholder="Name"
          required
          />

          )}
          <TextField
          margin="normal"
          type={"email"}
          variant="outlined"
          placeholder="Email"
          required
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            required
            />
            
         {/* <Button 
          variant="contained"
          color="warning"
        >
           {isSignup ? "Signup" : "Login" }
        </Button> */}
        <button className="buttonName">
        {isSignup ? "Signup" : "Login" }
        </button>
        <Button 
        onClick={() => setIsSignUp(!isSignup)}
        sx={{marginTop: 3, borderRadius: 3}}
        >
            {isSignup ? "Already have an account" : "Don't have an account ?"}

        </Button>
        <Button 
        onClick={() => setIsSignUp(!isSignup)}
        sx={{marginTop: 3, borderRadius: 3}}
        >
            {isSignup ? "" : "Forget Password"}

        </Button>
        </Box>
        </div>
        </form>
        
  
    </div>
  );
}

export default Login;