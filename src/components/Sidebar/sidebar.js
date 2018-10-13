import React from 'react';
import {Link, } from 'react-router-dom';
import './sidebar.scss';

const menuList = [
    'Music',
    'Corporate',
    'Wedding',
    'Art & Design',
    'Food & Drink',
    'Health & Fitness',
    'Photography',
    'Fashion & Beauty',
    'More categories'
];

const Sidebar = ({active}) => (
    <div className='sidebar'>
        <ul>
            {
                menuList.map((menu, index) => (
                    <li key={index}>
                        <Link to='/' className={active === menuList[index] ? 'active' : ''}>
                            <img src="" alt=""/>
                            <span>{menu}</span>
                        </Link>
                    </li>
                ))
            }

            {/* <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Corporate</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Wedding</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Art & Design</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Food & Drink</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Health & Fitness</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Photography</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>Fashion & Beauty</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <img src="" alt=""/>
                    <span>More Categories</span>
                </Link>
            </li> */}
        </ul>
    </div>
);

export default Sidebar;