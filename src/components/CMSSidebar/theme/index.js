import React from 'react';
import styles from './theme.module.scss';
import Sidebar from '../../Sidebar';

const themeList = [
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
    },
    {
        image: 'images/theme_6.png',
        title: 'UI/UX Designer',
    },
    {
        image: 'images/theme_5.png',
        title: 'Software Engineer',
    },
    {
        image: 'images/theme_5.png',
        title: 'Software Architect',
    }
];

export const Theme = () => (
    <div className='pages'>
        <div className={styles.menuHeader}>
            <span>Theme</span>
        <button className={styles.changeButton}>Change</button>
        </div>
        <div className={styles.themeContainer}>
            <div className={styles.themeBox}></div>
            <div className={styles.themeDetails}>
                <h4 className={styles.title}>Theme Title</h4>
                <div className={styles.description}>This is your active theme</div>
            </div>
        </div>
    </div>
);

export const ChangeTheme = () => (
    <div className={styles.changeTheme}>
        <header>CHANGE THEME</header>
        <div className={styles.flexContainer}>
            <div className={styles.sidebarContainer}>
                <h4>TOP CATEGOROIES</h4>
                <Sidebar />
            </div>
            <div className={styles.themeListing}>
            {
                themeList && Array.isArray(themeList) && themeList.map((theme, index) => (
                    <div className={styles.themeItem}>
                        <img src={theme.image} alt />
                        <div className={styles.title}>{theme.title}</div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
);