import React from 'react';
import ReactSVG from 'react-svg';
import './general.scss';

const General = () => (
    <div className='pages'>
        <div className='menuHeader'>General</div>
        <form action="">
            <div>
                <label htmlFor="">Site Title:</label>
                <input type="text"/>
            </div>

            <div>
                <label htmlFor="">Site Title:</label>
                <input type="text" />
            </div>

            <div>
                <div></div>
            </div>
            <div>
                <button>Edit Image</button>
                <button>Remove</button>
            </div>
            <p>
                The recommended size for this theme logo is 350 x 70 pixels
            </p>
        </form>
    </div>
);

export default General;