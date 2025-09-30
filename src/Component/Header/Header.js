import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(){
  const navigate=useNavigate();

 const navigateToDashboard=()=>{
    navigate('/')
 }
 const navigateToregister=()=>{
    navigate("/register")
}
const navigateToLogin =()=>{
    navigate("/login")
}

    return(
    <div className="pageheader">
        <div className='headerblog' onClick={navigateToDashboard}>Blogs</div>
        <div className='loginregisterbutton'>
        <div onClick={navigateToLogin}><i class="fa fa-user-circle-o LoginIcon" aria-hidden="true"></i>Login </div>
        <div onClick={navigateToregister}><i class="fa fa-registered RegisterIcon" aria-hidden="true"></i>Register</div>
        </div>
        


    </div>




    );

}
export default Header;