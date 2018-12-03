import React from 'react';
import styles from './style.module.scss';

const TestTheme = () => (
    <div className={styles.pageContainer}>
        <h1>I am the test page</h1>
        <div className={styles.imageDiv}>
            <img src="images/theme_2.png" alt=""/>
        </div>
    </div>
);

export default TestTheme;