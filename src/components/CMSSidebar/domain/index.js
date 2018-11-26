import React from 'react';
import ReactSVG from 'react-svg';
import {Link} from 'react-router-dom';
import { composeClasses } from '../../../utils';
import styles from './domain.module.scss';

const Domain = () => (
  <div className={styles.domain}>
    <div className={styles.menuHeader}>Choose a domain before you publish</div>
    <p className={styles.domainIntro}>
      The domain name you enter will be your site’s address.
    </p>
    <form action="#" className={styles.domainForm}>
      <div className={composeClasses(styles.inputGroup, styles.light)}>
        <input type="radio" name="domain" />
        <label htmlFor="">Get a Free domain name</label>
        <div className={styles.inputBox}>
          <ReactSVG src="arrow-left.svg" />
          <ReactSVG src="reload.svg" />
          <input type="text" disabled placeholder="www.mallby.com/yourname" />
        </div>
      </div>
      <div className={composeClasses(styles.inputGroup, styles.light)}>
        <input type="radio" name="domain" />
        <label htmlFor="">Get your own customized domain name</label>
        <div className={styles.inputBox}>
          <ReactSVG src="arrow-left.svg" />
          <ReactSVG src="reload.svg" />
          <input type="text" disabled placeholder="www.yourname.com" />
        </div>
      </div>
      <div>
        <Link to="/domain" className={styles.continueButton}>
          Continue
        </Link>
      </div>
    </form>
  </div>
);

export default Domain;