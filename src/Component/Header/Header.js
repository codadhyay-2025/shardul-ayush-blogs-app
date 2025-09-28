import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(){
  const navigate=useNavigate();

 const navigateToDashboard=()=>{
    navigate('/.')
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
        <div onClick={navigateToLogin}>Login </div>
        <div onClick={navigateToregister}>Register</div>
        </div>
        


    </div>




    );

}
export default Header;