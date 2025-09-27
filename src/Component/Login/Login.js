import './Login.css';
function Login(){
    return(
        <div className="RegisterSection">
            <div className="RegisterBlog">Blogs</div>
            <div>publish your passsion,your way...</div>
            <hr/>
            <div className='register'>
                Login
                
            </div>
            {/* <div className='inputlabel'>Name</div>
            <input type="text"placeholder="Firstname Lastname" className='Allinput'/> */}
            <div className='inputlabel'>Email id</div>
            <input type="password" placeholder="test@gmail.com" className='Allinput'/>
             <div className='inputlabel'>password</div>
            <input type="password" placeholder="pass1234" className='Allinput'/>
            <button className='registerButton'>Login</button>
        </div>
    );
}
export default Login;