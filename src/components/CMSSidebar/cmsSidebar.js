import React, {Component, Fragment,} from 'react';
import styles from './cmsSidebar.module.scss';
import ReactSVG from 'react-svg';
import {composeClasses} from '../../utils';
import Pages from './pages';
import General from './general';
import Theme from './theme';
import Profile from './profile';

class CMSSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClose: false,
            activeSection: 'theme',
        };
    }

    closeSidebar(e){
        e.preventDefault();
        this.setState({
            isClose: true,
            activeSection: '',
        });
    }

    openSidebar(e) {
        e.preventDefault();
        this.setState({
            isClose: false
        });
    }

    sectionChange(name=''){
        this.setState({
            activeSection: name
        });
    }

    renderSectionContent(section) {
        switch(section){
            case 'pages':
                return <Pages />;
            case 'general':
                return <General />;
            case 'theme':
                return <Theme />;
            case 'profile':
                return <Profile />;
            default:
                break;
        }
    }

    render(){
        const {isClose, activeSection, } = this.state;
        return (
            <Fragment>
                <div className={composeClasses(styles.cmsSidebar, isClose ? styles.close : '')}>
                    <ul className={styles.cmsidebar}>
                        <li className={styles.logo}>
                            <ReactSVG src='logo.svg'/>
                        </li>
                        <li onClick={() => this.sectionChange('general')}>
                            <ReactSVG src = 'home.svg' / >
                        </li>
                        <li onClick={() => this.sectionChange('pages')}>
                            <ReactSVG src = 'stack.svg' / >
                        </li>
                        <li onClick={() => this.sectionChange('theme')}>
                            <ReactSVG src = 'window.svg' / >
                        </li>
                        <li onClick={() => this.sectionChange('gallery')}>
                            <ReactSVG src = 'folder.svg' / >
                        </li>
                    </ul>
                    <ul className={styles.menuListDown}>
                        <li onClick={(e) => this.closeSidebar(e)}>
                            <ReactSVG src = 'open.svg' / >
                        </li>
                        <li onClick={() => this.sectionChange('profile')}>
                            <ReactSVG src='user.svg' />
                        </li>
                    </ul>
                </div>

                <div className={composeClasses(styles.cmsModal, activeSection ? styles.open : '')}>
                    <div className={composeClasses(styles.sidebarContent, activeSection && styles.open)}>
                        {this.renderSectionContent(activeSection)}
                    </div>
                    <button
                        className={styles.closeSection}
                        onClick={() => this.sectionChange()}
                    >
                        <ReactSVG src='close-section.svg' />
                    </button>
                </div>

                <button
                    className={composeClasses(styles.openButton, isClose ? styles.showButton : '')}
                    onClick={(e) => this.openSidebar(e)}
                >
                    <ReactSVG src='close.svg'/>
                </button>
            </Fragment>
        );
    }
}

export default CMSSidebar;