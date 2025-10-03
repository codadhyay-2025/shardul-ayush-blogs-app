import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    const [userdata, setuserdata] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    //  const navigateToBlogs=()=>{
    //     // navigate("/blogs")
    //  }





    //  handle login button
    function handleButtonLogin() {

        if (!userdata.email.trim() || !userdata.password.trim()) {
            alert("please eneter user details")


        }
        else {
            axios.get("http://localhost:3001/users")
                .then((response) => {
                    if (response.status === 200) {


                        const users = response.data.find((singleUser) => {
                            if (singleUser.userEmail === userdata.email && singleUser.userPassword === userdata.password) {
                                return singleUser;
                            }
                        })
                        if (users) {
                            navigate("/blogs")
                            localStorage.setItem("useremail",userdata.email)
                        }
                        else{
                            alert("enter valid details")
                        }

                    }


                })

        }


        //     axios.get("http://localhost:3001/users")
        //     .then((response) =>{
        //         const users=response.data

        //             // console.log(singleUser.userEmail);
        //             // console.log(singleUser.userPassword);
        //             // console.log(userdata.email);
        //             // console.log(userdata.password);

        //             if (!userdata.email.trim() || !userdata.password.trim()){
        //                 // alert("please eneter user details")
        //             }

        //             else{
        //                 users.find((singleUser)=>{
        //             const chekduser=(singleUser.userEmail === userdata.email && singleUser.userPassword === userdata.password)

        //                 // alert("login succesful");
        //                 // navigate("/blogs");
        //             // }
        //                 if(chekduser){
        //                     alert("login succesful");
        //                 navigate("/blogs");

        //             }
        //             else{
        //                 alert("invalid information")
        //             }
        //        })
        //     }}
        // )

    }

    // object to store login user detail;


    function handleLoginEmail(event) {
        let user = { ...userdata };
        user["email"] = event.target.value;
        setuserdata(user);
    }
    function handleLoginPassword(event) {
        let user = { ...userdata };
        user["password"] = event.target.value;
        setuserdata(user);
    }
    return (
        // <div className='backgroundimg'>
        <div className="RegisterSection logheight">
            <div className="RegisterBlog">Blogs</div>
            <div>publish your passsion,your way...</div>
            <hr />
            <div className='register'>
                Login

            </div>
            {/* <div className='inputlabel'>Name</div>
            <input type="text"placeholder="Firstname Lastname" className='Allinput'/> */}
            <div className='inputlabel'>Email id</div>
            <input type="text" placeholder="test@gmail.com" value={userdata.email} onChange={handleLoginEmail} className='Allinput' />
            <div className='inputlabel'>password</div>
            <input type="password" placeholder="pass1234" value={userdata.password} onChange={handleLoginPassword} className='Allinput' />
            <button className='registersandloginpageButton' onClick={handleButtonLogin}>Login</button>
        </div>
        // </div>
    );
}
export default Login;