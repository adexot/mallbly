import React, {Fragment, Component} from 'react';
import {Link,} from 'react-router-dom';
import ReactSVG from 'react-svg';
import styles from './home.module.scss';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import {composeClasses} from '../../utils';
import {categoryData} from './homeData';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: 'wedding',
        };
    }

    changeCategory(categoryName) {
        this.setState({ activeCategory: categoryName });
    }

    render(){
        const {activeCategory} = this.state;
        const activeCategoryData = categoryData[activeCategory] || categoryData.wedding;

        return (
            <Fragment>
                <Nav />

                <section className={styles.intro}>
                    <div className={styles.introLeft}>
                        <Sidebar active={activeCategory} onClickHandler={(param) => this.changeCategory(param)}/>
                    </div>
                    <div className={styles.introCenter}>
                        <h1 style={{color:activeCategoryData.headingColor}}>
                            {activeCategoryData.heading}
                        </h1>

                        <img src={`images/${activeCategoryData.backgroundImage}`} alt="" />
                    </div>
                    <div className={styles.introRight}>
                        <div className={styles.ctaBox}>
                            <ReactSVG src='arrow-right.svg' className={styles.arrow} />
                            <div>See all</div>
                            <h4>Wedding Templates</h4>
                        </div>
                        {/* <div> */}
                        <ul className={styles.introSlider}>
                            {activeCategoryData.themes.map((theme, index) => (
                                <li>
                                    <img src={`images/${theme}`} alt="" />
                                    <div className={styles.themeOverlay}>
                                        <a className={styles.button}>Preview Template</a>
                                        <a className={styles.button}>Start with this template</a>
                                    </div>
                                </li>
                            ))}
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
                    <img src="images/bg-about.png" className={styles.aboutImage} alt="" />
                </section>

                <section className={styles.customer}>
                    <img src="images/bg-burna_boy.png" alt="" />
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

    }
}

export default Home;