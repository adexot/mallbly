import React from 'react';
import ReactSVG from 'react-svg';
import { composeClasses } from '../../../utils';
import styles from './domain.module.scss';

const Domain = () => (
    <div className={styles.domain}>
        <div className={styles.menuHeader}>Choose a domain before you publish</div>
        <p className={styles.domainIntro}>
            The domain name you enter will be your site’s address.
        </p>
        <form action="#" className={styles.domainForm}>
            <div className={composeClasses(styles.inputGroup, styles.dark)}>
                <input type="radio" name='domain'/>
                <label htmlFor="">Get a Free domain name</label>
                <div className={styles.inputBox}>
                    <ReactSVG src='arrow-left.svg'/>
                    <ReactSVG src='reload.svg' />
                    <input type="text" placeholder='www.mallby.com/yourname'/>
                </div>
            </div>
            <div className={composeClasses(styles.inputGroup, styles.light)}>
                <input type="radio" name='domain'/>
                <label htmlFor="">Get your own customized domain name</label>
                <div className={styles.inputBox}>
                    <ReactSVG src='arrow-left.svg' />
                    <ReactSVG src='reload.svg' />
                    <input type="text" placeholder='www.yourname.com' />
                </div>
            </div>
            <div>
                <button className={styles.continueButton}>
                    Continue
                </button>
            </div>
        </form>
    </div>
);

export default Domain;