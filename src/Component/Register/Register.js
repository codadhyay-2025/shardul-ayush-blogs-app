import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
function Register() {

    const navigate=useNavigate();
    // navigate("/login")
    // const navigateToLogin =()=>{
        
    // }
    // create function for store user data in json file
   const[userdata, setuserdata]=useState({
    username:"",
    userEmail:"",
    userPassword:"",

   })
  function handleRegister(){
     axios.post('http://localhost:3001/users', userdata)
      .then(response => { 
        
        alert("Registration successful!");
        //   navigate("/login"); 
        console.log(userdata)
     
      })
      .catch(error => {

          console.error("Registration failed:", error);
        // No alert for error
      });
  }
   function handleUserName(event){
    let user={...userdata};
    user["username"]=event.target.value;
    setuserdata(user)
   }
   function handleUserEmail(event){
    let user={...userdata};
    user["userEmail"]=event.target.value;
    setuserdata(user)
   }
   function handleUserPassword(event){
    let user={...userdata};
    user["userPassword"]=event.target.value;
    setuserdata(user)
   }


    return (
        <div className='registerSectionbackgroundiamge'>


            <div className='arrangeregisterform'>
                <div className="RegisterSection">

                    <div className="RegisterBlog">Blogs</div>
                    <div>publish your passsion,your way...</div>
                    <hr />
                    <div className='register'>
                        Register

                    </div>
                    <div className='inputlabel'>Name</div>
                    <input type="text" placeholder="Firstname Lastname" value={userdata.username} onChange={handleUserName} className='Allinput' />
                    <div className='inputlabel'>Email id</div>
                    <input type='text' placeholder='test@gmail.com' value={userdata.userEmail} onChange={handleUserEmail} className='Allinput' />
                    <div className='inputlabel'>password</div>
                    <input type="password" placeholder="pass1234" value={userdata.userPassword} onChange={handleUserPassword} className='Allinput' />
                    <button className='registersandloginpageButton' onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    );
}
export default Register;