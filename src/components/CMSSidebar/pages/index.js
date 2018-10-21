import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import styles from './pages.module.scss';
import {composeClasses} from '../../../utils';

const pages = ['Home', 'About Us', 'People', 'Jobs'];
const activePages = ['Home', 'People'];

class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activepage: '',
            livePages: activePages
        };
    }

    makeContentEditable(page=''){
        this.setState({
            activePage: page,
        });
    }

    componentDidMount() {

    }

    toggle(page){
    }

    render() {
        const {activePage, livePages} = this.state;
        const isActive = page => page === activePage;

        return (
            <div className='pages'>
                <div className={styles.menuHeader}>Pages</div>
                <ul className={styles.menuList}>
                    {pages && pages.map((page, index) => (
                        <li>
                            <div className={styles.inputDiv}>
                                <input
                                    className={isActive(page) ? styles.inputClass : ''}
                                    type="text"
                                    placeholder={page}
                                    readOnly={!isActive(page)}
                                    autoFocus={isActive(page)}
                                />
                                <span onClick={(e) => this.makeContentEditable(page)}>
                                    <ReactSVG src='edit.svg' />
                                </span>
                            </div>
                            <div className={composeClasses(styles.pageActions, isActive(page) ? '' : styles.hide)}>
                                <button>
                                    <ReactSVG src='save.svg' />
                                    <span>SAVE</span>
                                </button>
                                <div>
                                    <span>OFF</span>
                                    <span id='toggle' className={composeClasses(styles.toggleButton, !livePages.includes(page) && styles.off)}
                                    onClick={(e) => this.toggle(page)}
                                    ></span>
                                    <span>ON</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Pages;