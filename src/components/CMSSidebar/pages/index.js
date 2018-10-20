import React from 'react';
import ReactSVG from 'react-svg';
import './pages.scss';

const Pages = () => (
    <div className='pages'>
        <div className='menuHeader'>Pages</div>
        <ul className='menuList'>
            <li>
                <input type="text" value='Home' />
                <span onClick={(e) => this.makeContentEditable(e)}>
                    <ReactSVG src='edit.svg' />
                </span>
            </li>
            <li>
                <input type="text" value='About Us' readOnly />
            </li>
            <li>
                <input type="text" value='People' readOnly />
            </li>
            <li>
                <input type="text" value='Jobs' readOnly />
            </li>
        </ul>
    </div>
);

export default Pages;