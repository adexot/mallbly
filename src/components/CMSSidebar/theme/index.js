import React from 'react';
import styles from './theme.module.scss';
const Theme = () => (
    <div className='pages'>
        <div className={styles.menuHeader}>Theme</div>
        <div className={styles.themeContainer}>
            <div className={styles.themeBox}></div>
            <div className={styles.themeDetails}>
                <h4 className={styles.title}>Theme Title</h4>
                <div className={styles.description}>This is your active theme</div>
            </div>
        </div>
    </div>
);

export default Theme;