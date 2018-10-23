import React from 'react';
import {Link,} from 'react-router-dom';
import styles from './signup.module.scss';
import {composeClasses} from '../../utils';

const Home = () => (
   <div className={styles.authContainer}>
       <div className={styles.textCenter}>
           < Link to='/' className ={styles.logo}> mallbly </Link>
       </div>
       <div className={styles.authBox}>
            <h1>Create an Account</h1>
            <form action="/cms">
                <div className={styles.inputGroup}>
                    <label htmlFor="firstName"></label>
                    <input type="text" placeholder='First Name'/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="lastName"></label>
                    <input type="text" placeholder='Last Name'/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder='Password'/>
                </div>
                <p>
                    By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy.
                </p>
                {/* TODO: uncomment when the login action is implemented */}
                {/* <button className={styles.authButton}>Create Account</button> */}
                <Link to='/cms' className={styles.authButton}>Create Account</Link>
            </form>
       </div>
       < div className={composeClasses(styles.textCenter, styles.alternativeDiv)}>
            <span>
                Already have an account?
                <Link to='/signup' className={styles.link}> Log In</Link>
            </span>
        </div>
   </div>
);

export default Home;