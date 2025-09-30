import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register() {

    const navigate=useNavigate();
    const navigateToLogin =()=>{
        navigate("/login")
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
                    <input type="text" placeholder="Firstname Lastname" className='Allinput' />
                    <div className='inputlabel'>Email id</div>
                    <input type='text' placeholder='test@gmail.com' className='Allinput' />
                    <div className='inputlabel'>password</div>
                    <input type="password" placeholder="pass1234" className='Allinput' />
                    <button className='registersandloginpageButton' onClick={navigateToLogin}>Register</button>
                </div>
            </div>
        </div>
    );
}
export default Register;