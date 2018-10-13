import React, {Fragment,} from 'react';
import {Link,} from 'react-router-dom';
import './home.scss';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';

const Home = () => (
   <Fragment>
       <Nav />

       <section className="intro">
            <div className='introLeft'>
                <Sidebar active='Wedding' />
            </div>
            <div className='introCenter'>
                <h1>
                    A beautiful website starts here
                </h1>
            </div>
            <div className='introRight'>
                <div className='ctaBox'>
                    <img src="" alt="" />
                    <div>See all</div>
                    <h4>Wedding Templates</h4>
                </div>
                <div className='introSlider'>
                    <ul>
                        <li>
                            <img src="" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
       </section>

       <section className='info'>
           <div className='infoBox'>
               <h1>Just the right website for your business</h1>
               <p>
In minim duis reprehenderit nisi sit irure nulla.Nulla incididunt ea sit ut incididunt veniam magna ea adipisicing ex nisi.Laborum eiusmod cupidatat aute ex ipsum commodo anim officia aliqua nulla exercitation voluptate ullamco amet.Consectetur do Lorem voluptate esse nulla enim.In minim duis reprehenderit nisi sit irure nulla.Nulla incididunt ea sit ut incididunt veniam magna ea adipisicing ex nisi.Laborum eiusmod cupidatat aute ex ipsum commodo anim officia aliqua nulla exercitation voluptate ullamco amet.Consectetur do Lorem voluptate esse nulla enim.
               </p>
               <Link to='/' className='button infoCTA'>Get Started</Link>
           </div>
           <div></div>
       </section>

       <section className='customer'>
           <div className='customerCommentBox'>
            <h2>
                I want a website that reflects who I am - with exactly the features I need. That's Mallbly.
            </h2>
            <div className='customerDetails'>
                <h3>BurnaBoy</h3>
                <p>Multi Award Winning Recording Artist</p>
                <a href="#">www.burnaboy.com</a>
            </div>
            <Link to="/" className="customerCommentButton button">Get Started</Link>
           </div>

       </section>
   </Fragment>
);

export default Home;