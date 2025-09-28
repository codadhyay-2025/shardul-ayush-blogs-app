import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


function Dashboard(){
const navigate=useNavigate();
const navigateTOlogin = () => {
    navigate("/login")

}
const navigateToregister=()=>{
    navigate("/register")
}
const navigateToDashboard=()=>{
    navigate("/")
}


return(
    <div>
        <div>
            <div className="areaOFheaderAndLogin">
                <div className="blogHeader" onClick={navigateToDashboard}>Blogs!</div>
                <div>publish your passion,your way...</div>
                <hr/>
                <button className="loginButton" onClick={navigateTOlogin}>Login</button>
                <button className="registerButton" onClick={navigateToregister}>Register</button>
            </div>
        </div>
    </div>

);
}
export default Dashboard;