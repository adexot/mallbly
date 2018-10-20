import React, {Component, Fragment,} from 'react';
import './cmsSidebar.scss';
import ReactSVG from 'react-svg';
import Pages from './pages';
import General from './general';
import Theme from './theme';

class CMSSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClose: false,
            activeSection: '',
        };
    }

    closeSidebar(e){
        e.preventDefault();
        this.setState({
            isClose: true
        });
    }

    openSidebar(e) {
        e.preventDefault();
        this.setState({
            isClose: false
        });
    }

    sectionChange(name){
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
            default:
                break;
        }
    }

    render(){
        const {isClose, activeSection, } = this.state;
        const sidebarClass = `cmsSidebar ${isClose ? 'close' : ''}`;
        const openButtonClass = `openButton ${isClose ? 'showButton' : ''}`;
        return (
            <Fragment>
                <div className={sidebarClass}>
                    <ul className=''>
                        <li className='logo'>
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
                    <ul className='menuListDown'>
                        <li onClick={(e) => this.closeSidebar(e)}>
                            <ReactSVG src = 'open.svg' / >
                        </li>
                        <li onClick={() => this.sectionChange('profile')}>
                            <ReactSVG src='user.svg' />
                        </li>
                    </ul>
                </div>

                <div className='sidebarContent'>
                    {this.renderSectionContent(activeSection)}
                </div>

                <button className={openButtonClass} onClick={(e) => this.openSidebar(e)}>
                    <ReactSVG src='close.svg'/>
                </button>
            </Fragment>
        );
    }
}

export default CMSSidebar;