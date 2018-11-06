import React, {Component, Fragment,} from 'react';
import styles from './cmsSidebar.module.scss';
import ReactSVG from 'react-svg';
import {composeClasses} from '../../utils';
import Pages from './pages';
import General from './general';
import {Theme, ChangeTheme} from './theme';
import Profile from './profile';
import Gallery from './gallery';
import Domain from './domain';

class CMSSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClose: false,
            activeSection: '',
            isFull: false
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

    setFullSectionContent(name, value=false) {
        this.setState({
            activeSection: name,
            isFull: value
        });
    }

    renderSectionContent(section) {
        switch(section){
            case 'pages':
                return <Pages />;
            case 'general':
                return <General />;
            case 'theme':
                return <Theme changeThemeFn={() => this.setFullSectionContent('changeTheme', true)}/>;
            case 'profile':
                return <Profile />;
            case 'gallery':
                return <Gallery />;
            case 'changeTheme':
                return <ChangeTheme />;
            case 'domain':
                return <Domain />;
            default:
                break;
        }
    }

    renderPublishStrip(){
        const {activeSection} = this.state;
        return(
            <div className={composeClasses(styles.publishStrip, activeSection && styles.hide)}>
                <span>Done editing? Publish your site now</span>
                <button className={styles.publishButton} onClick={() => this.setFullSectionContent('domain')}>Publish Site</button>
            </div>
        );
    }

    render(){
        const {isClose, activeSection, isFull } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={composeClasses(styles.cmsSidebar, isClose ? styles.close : '')}>
                    <ul className={styles.cmsidebar}>
                        <li className={styles.logo}>
                            <ReactSVG src='logo.svg'/>
                        </li>
                        <li onClick={() => this.setFullSectionContent('general')}>
                            <ReactSVG src = 'home.svg' / >
                        </li>
                        <li onClick={() => this.setFullSectionContent('pages')}>
                            <ReactSVG src = 'stack.svg' / >
                        </li>
                        <li onClick={() => this.setFullSectionContent('theme')}>
                            <ReactSVG src = 'window.svg' / >
                        </li>
                        <li onClick={() => this.setFullSectionContent('gallery', true)}>
                            <ReactSVG src = 'folder.svg' / >
                        </li>
                    </ul>
                    <ul className={styles.menuListDown}>
                        <li onClick={(e) => this.closeSidebar(e)}>
                            <ReactSVG src = 'open.svg' / >
                        </li>
                        <li onClick={() => this.setFullSectionContent('profile')}>
                            <ReactSVG src='user.svg' />
                        </li>
                    </ul>
                </div>

                <div className={composeClasses(styles.cmsModal, activeSection ? styles.open : '')}>
                    <div className={composeClasses(styles.sidebarContent, activeSection && styles.open, isFull ? styles.full : '', activeSection === 'domain' ? styles.right : '')}>
                        {this.renderSectionContent(activeSection)}
                    </div>
                    {
                        isFull ?
                            null:
                            <button
                                className={styles.closeSection}
                                onClick={() => this.setFullSectionContent()}
                            >
                                <ReactSVG src='close-section.svg' />
                            </button>
                    }

                </div>

                <button
                    className={composeClasses(styles.openButton, isClose ? styles.showButton : '')}
                    onClick={(e) => this.openSidebar(e)}
                >
                    <ReactSVG src='close.svg'/>
                </button>
                {this.renderPublishStrip()}
            </div>
        );
    }
}

export default CMSSidebar;