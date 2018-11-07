import React from 'react';
import styles from './whois.module.scss';

const WhoIs = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
            <header className={styles.pageHeader}>
                <h2>Enter your Information</h2>
                <p>This is the fianl step and you are done!</p>
            </header>
            <form action="">
                <div className={styles.inputGroup}>
                    <label htmlFor="">Mobile Number</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">Address 1</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">Address 2</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">Organization</label>
                    <input type="text" placeholder='Enter url here' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor=""></label>
                    <button className={styles.continueButton}>Continue</button>
                </div>
            </form>
        </div>
    </div>
);

export default WhoIs;