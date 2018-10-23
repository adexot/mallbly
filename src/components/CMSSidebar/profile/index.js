import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import styles from './profile.module.scss';
import { composeClasses } from '../../../utils';


const Profile = () => (
    <div>
        <div className={styles.menuHeader}>
            <span>Profile</span>
            <button className={styles.updateButton}>Update</button>
        </div>
        <form action="" className={styles.formBox}>
            <div className={styles.inputGroup}>
                <label htmlFor="">First name:</label>
                <input type="text" name='firstname' id='firstname'/>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="">Last name:</label>
                <input type="text" name='lastname' id='lastname'/>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="">Email address</label>
                <input type="text" name='email' id='email'/>
            </div>
        </form>

        <div className={styles.logoutContainer}>
            <button className={styles.logoutButton}>Log Out</button>
        </div>
    </div>
);

export default Profile;