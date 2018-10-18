import React, {Component, Fragment,} from 'react';
import './cmsSidebar.scss';

class CMSSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClose: true
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

    render(){
        const {isClose,} = this.state;
        const sidebarClass = `cmsSidebar ${isClose ? 'close' : ''}`;
        const openButtonClass = `openButton ${isClose ? 'showButton' : ''}`;
        return (
            <Fragment>
                <div className={sidebarClass}>
                    <ul className=''>
                        <li>logo</li>
                        <li>home</li>
                    </ul>
                    <ul className='menuListDown'>
                        <li onClick={(e) => this.closeSidebar(e)}>close</li>
                    </ul>
                </div>

                <div className='sidebarContent'>
                    <div>Sidebar Content</div>
                </div>

                <button className={openButtonClass} onClick={(e) => this.openSidebar(e)}>
                    open
                </button>
            </Fragment>
        );
    }
}

export default CMSSidebar;