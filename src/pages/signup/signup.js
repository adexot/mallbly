import React from 'react';
import {Link,} from 'react-router-dom';
import './signup.scss';

const Home = () => (
   <div className='authContainer'>
       <div className='textCenter'>
           < Link to='/' className ='logo'> mallbly </Link>
       </div>
       <div className='authBox'>
            <h1>Create an Account</h1>
            <form action="">
                <div className='inputGroup'>
                    <label htmlFor="firstName"></label>
                    <input type="text" placeholder='First Name'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="lastName"></label>
                    <input type="text" placeholder='Last Name'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder='First Name'/>
                </div>
                <p>
                    By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy.
                </p>

                <button className='authButton'>Create Account</button>
            </form>
       </div>
       < div className='textCenter alternativeDiv'>
            <span>
                Already have an account?
                <Link to='/login' className='link'> Log In</Link>
            </span>
        </div>
   </div>
);

export default Home;