
import './index.css'
import { Component } from 'react';
import { BiSolidMessageRounded, BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import { FaUser, FaArrowLeft } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";


class LoginPage extends Component {

    state = {
        showPassword : false
    }

    onClickShowPassword = () => {
        this.setState(prev => ({showPassword : !prev.showPassword}))
    }

    render () {
        const {showPassword} = this.state


        const isLockIcon = showPassword ? (
            <BiSolidLockOpenAlt onClick={this.onClickShowPassword} size={20} color='gray' />
        ):(
            <BiSolidLockAlt onClick={this.onClickShowPassword} size={20} color='gray' />
        ) 

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
                            <input className='input' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            {isLockIcon}
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

}

export default LoginPage