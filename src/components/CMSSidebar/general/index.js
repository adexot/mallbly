import React from 'react';
import ReactSVG from 'react-svg';
import styles from './general.module.scss';

const General = () => (
    <div className={styles.general}>
        <div className={styles.menuHeader}>General</div>
        <form action="" className={styles.formBox}>
            <div className={styles.inputGroup}>
                <label htmlFor="">Site Title:</label>
                <input type="text" placeholder='Atomize'/>
            </div>

            <hr/>

            <div className={styles.inputGroup}>
                <label htmlFor="">Site Logo:</label>
                <input type="text" placeholder='Logo Name here' />
            </div>

            <div className={styles.logoContainer}>
                <div className={styles.logoUpload}>
                    <label htmlFor='logo' className={styles.uploadButton}>Upload Image</label>
                    <input type="file" id='logo' name='logo'/>
                </div>
                {/* TODO: uncomment when image upload functionality is available */}
                {/* <div className={styles.logoName}>atomize-logo.jpg</div> */}
            </div>

            {/* TODO: uncomment when image upload functionality is available */}
            {/* <div className={styles.uploadActions}>
                <button className={styles.edit}>Edit Image</button>
                <button className={styles.remove}>
                <ReactSVG src='cancel.svg' />
                Remove
                </button>
            </div> */}

            <p className={styles.logoInfo}>
                The recommended size for this theme logo is 350 x 70 pixels
            </p>

            <hr />

            <div className={styles.colorHeader}>
                <span className={styles.title}>Theme Colours</span>
                <span className={styles.helpText}>Click colour to edit</span>
            </div>

            <div className={styles.colorBox}>
                <span>Primary Colour</span>
                <input type="color"/>
            </div>

            <div className={styles.colorBox}>
                <span>Secondary Colour</span>
                <input type="color" />
            </div>
        </form>
    </div>
);

export default General;