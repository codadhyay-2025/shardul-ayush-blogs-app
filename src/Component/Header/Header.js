import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const loggedemail = localStorage.getItem('useremail')
    const navigateToDashboard = () => {
        navigate('/')
    }
    const navigateToregister = () => {
        navigate("/register")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    function handlelogout(){
        localStorage.removeItem('useremail')
        navigate('/')
    }
    // let user={localStorage.vvwcvwcvwcvgetItem('')}
    return (
        <div>
            <div className="pageheader">
                <div className='headerblog' onClick={navigateToDashboard}>Blogs</div>
                <div className='loginregisterbutton'>
                    {loggedemail ?(
                        <>
                            <div onClick={navigateToLogin}><i class="fa fa-user-circle-o LoginIcon" aria-hidden="true"></i>{loggedemail}</div>
                            <div onClick={handlelogout}>logout</div>
                        </>  
        ):(
            <>
                    <div onClick={navigateToLogin}><i class="fa fa-user-circle-o LoginIcon" aria-hidden="true"></i>Login </div>
                    <div onClick={navigateToregister}><i class="fa fa-registered RegisterIcon" aria-hidden="true"></i>Register</div>
                    </>
                    )}
                </div>



            </div>

        </div>


    );

}
export default Header;