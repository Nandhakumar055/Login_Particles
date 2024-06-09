
import './index.css'
import { BiSolidMessageRounded, BiSolidLockAlt } from "react-icons/bi";
import { FaUser, FaArrowLeft } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";


const LoginPage = () => {
    return (
        <div className="login-page-container">
            <div className='login-card-container'>
                <div className='login-header-conainer'>
                    <div className='header-container'>
                        <BiSolidMessageRounded size={50} color='orange'/> 
                        <h1 className='heading'>VOIZ<span className='heading-span'>TRAIL</span></h1>   
                    </div>
                </div>    
                <div className='login-container'>    
                    <div className='sign-in'>
                        <FaUser size={22} color='white'/>
                        <p className='sign-in-text'>Sign In</p>
                    </div>
                    <div className='input-container'>
                        <input className='input' type='Username' placeholder='Username' />
                        <FaUser size={18} color='gray' />
                    </div>
                    <div className='input-container'>
                        <input className='input' type='password' placeholder='Password' />
                        <BiSolidLockAlt size={20} color='gray' />
                    </div>
                    <div className='secure-login-container'>
                        <div className='forgot-password'>
                            <FaArrowLeft size={15} color='white' />
                            <p className='forgot-text'>I forgot my password</p>
                        </div>
                        <div className='secure-login-button'>
                            <RiKey2Fill size={20} color='white'/>
                            <p className='secure-text' >Secure Login</p>
                        </div>
                    </div>
                    <p className='powered-by'>Powered By KG Hawes, LLC.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage