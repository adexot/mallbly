import React, {Fragment,} from 'react';
import {Link,} from 'react-router-dom';
import ReactSVG from 'react-svg';
import styles from './home.module.scss';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import {composeClasses} from '../../utils';


const Home = () => (
   <Fragment>
       <Nav />

       <section className={styles.intro}>
            <div className={styles.introLeft}>
                <Sidebar active='Wedding' />
            </div>
            <div className={styles.introCenter}>
                <h1>
                    A beautiful website starts here
                </h1>

                <img src="images/banner-wedding.png" alt=""/>
            </div>
            <div className={styles.introRight}>
                <div className={styles.ctaBox}>
                    <ReactSVG src='arrow-right.svg' className={styles.arrow}/>
                    <div>See all</div>
                    <h4>Wedding Templates</h4>
                </div>
                {/* <div> */}
                    <ul className={styles.introSlider}>
                        <li>
                            <img src="images/theme_3.png" alt=""/>
                            <div className={styles.themeOverlay}>
                                <a className={styles.button}>Choose Template</a>
                                <a className={styles.button}>Preview template</a>
                            </div>
                        </li>
                        <li>
                            <img src="images/theme_2.png" alt="" />
                            <div className={styles.themeOverlay}>
                                <a className={styles.button}>Choose Template</a>
                                <a className={styles.button}>Preview template</a>
                            </div>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
       </section>

       <section className={styles.info}>
           <div className={styles.infoBox}>
               <h1>Just the right website for your business</h1>
               <p>
In minim duis reprehenderit nisi sit irure nulla.Nulla incididunt ea sit ut incididunt veniam magna ea adipisicing ex nisi.Laborum eiusmod cupidatat aute ex ipsum commodo anim officia aliqua nulla exercitation voluptate ullamco amet.Consectetur do Lorem voluptate esse nulla enim.In minim duis reprehenderit nisi sit irure nulla.Nulla incididunt ea sit ut incididunt veniam magna ea adipisicing ex nisi.Laborum eiusmod cupidatat aute ex ipsum commodo anim officia aliqua nulla exercitation voluptate ullamco amet.Consectetur do Lorem voluptate esse nulla enim.
               </p>
               <Link to='/' className={composeClasses(styles.button, styles.infoCTA)}>Get Started</Link>
           </div>
            <img src="images/bg-about.png" className={styles.aboutImage} alt=""/>
       </section>

       <section className={styles.customer}>
            <img src="images/bg-burna_boy.png" alt=""/>
            <div className={styles.customerCommentBox}>
            <h2>
                "I want a website that reflects who I am - with exactly the features I need. That's Mallbly. "
            </h2>
            <div className={styles.customerDetails}>
                <h3>BurnaBoy</h3>
                <p>Multi Award Winning Recording Artist</p>
                <a href="#">www.burnaboy.com</a>
            </div>
            <Link to="/" className={composeClasses(styles.customerCommentButton, styles.button)}>Get Started</Link>
           </div>

       </section>
   </Fragment>
);

export default Home;