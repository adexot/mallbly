import React, {Component, Fragment,} from 'react';
import './cmsSidebar.scss';
import ReactSVG from 'react-svg';

class CMSSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClose: false
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

    makeContentEditable(e) {
        e.preventDefault();

        const element = e.target;
        console.log(e.parentElement);
    }

    render(){
        const {isClose,} = this.state;
        const sidebarClass = `cmsSidebar ${isClose ? 'close' : ''}`;
        const openButtonClass = `openButton ${isClose ? 'showButton' : ''}`;
        return (
            <Fragment>
                <div className={sidebarClass}>
                    <ul className=''>
                        <li className='logo'>
                            <ReactSVG src='logo.svg'/>
                        </li>
                        <li>
                            <ReactSVG src = 'home.svg' / >
                        </li>
                        <li>
                            <ReactSVG src = 'stack.svg' / >
                        </li>
                        <li>
                            <ReactSVG src = 'window.svg' / >
                        </li>
                        <li>
                            <ReactSVG src = 'folder.svg' / >
                        </li>
                    </ul>
                    <ul className='menuListDown'>
                        <li onClick={(e) => this.closeSidebar(e)}>
                            <ReactSVG src = 'open.svg' / >
                        </li>
                        <li>
                            <ReactSVG src='user.svg' />
                        </li>
                    </ul>
                </div>

                <div className='sidebarContent'>
                    <div className='pages'>
                        <div className='menuHeader'>Pages</div>
                        <ul className='menuList'>
                            <li>
                                <input type="text" value='Home' />
                                <span onClick={(e) => this.makeContentEditable(e)}>
                                    <ReactSVG src='edit.svg' />
                                </span>
<div className='pageActions'>
    <div>


        <span>SAVE</span>
    </div>

    <div>
        <span>OFF</span>
        <span>ON</span>
    </div>
</div>

                            </li>
                            <li>
                                <input type="text" value='About Us' readOnly/>
                            </li>
                            <li>
                                <input type="text" value='People' readOnly/>
                            </li>
                            <li>
                                <input type="text" value='Jobs' readOnly/>
                            </li>
                        </ul>
                    </div>
                </div>

                <button className={openButtonClass} onClick={(e) => this.openSidebar(e)}>
                    < svg width = "40"
                    height = "40"
                    viewBox = "0 0 60 60"
                    fill = "none"
                    xmlns = "http://www.w3.org/2000/svg" >
                        <rect width = "60"
                    height = "60"
                    fill = "black" />
                    <path fill-rule ="evenodd"
                    clip-rule ="evenodd"
                    d = "M16.25 45H43.8281C44.5176 45 45.0781 44.4395 45.0781 43.75V31.25C45.0781 30.5605 44.5176 30 43.8281 30H41.3281C40.6387 30 40.0781 30.5605 40.0781 31.25V40H20V20H28.8281C29.5176 20 30.0781 19.4395 30.0781 18.75V16.25C30.0781 15.5605 29.5176 15 28.8281 15H16.25C15.5605 15 15 15.5605 15 16.25V43.75C15 44.4395 15.5605 45 16.25 45ZM37.5781 33.75C37.5781 34.4395 37.0176 35 36.3281 35H25.0781V23.75C25.0781 23.0605 25.6387 22.5 26.3281 22.5H28.8281C29.5176 22.5 30.0781 23.0605 30.0781 23.75V26.4648L41.1758 15.3652C41.4121 15.1309 41.7285 15 42.0605 15H45.0781V18.0176C45.0781 18.3496 44.9473 18.666 44.7129 18.9004L33.6133 30H36.3281C37.0176 30 37.5781 30.5605 37.5781 31.25V33.75Z"
                    fill = "#DADADA"/>
                    <path d="M40.0781 40V40.5C40.3543 40.5 40.5781 40.2761 40.5781 40H40.0781ZM20 40H19.5C19.5 40.2761 19.7239 40.5 20 40.5V40ZM20 20V19.5C19.7239 19.5 19.5 19.7239 19.5 20H20ZM25.0781 35H24.5781C24.5781 35.2761 24.802 35.5 25.0781 35.5V35ZM30.0781 26.4648H29.5781C29.5781 26.6671 29.7 26.8494 29.8868 26.9268C30.0737 27.0042 30.2887 26.9614 30.4317 26.8184L30.0781 26.4648ZM41.1758 15.3652L40.8237 15.0102L40.8222 15.0117L41.1758 15.3652ZM45.0781 15H45.5781C45.5781 14.7239 45.3543 14.5 45.0781 14.5V15ZM33.6133 30L33.2597 29.6464C33.1167 29.7894 33.074 30.0045 33.1513 30.1913C33.2287 30.3782 33.4111 30.5 33.6133 30.5V30ZM43.8281 44.5H16.25V45.5H43.8281V44.5ZM44.5781 43.75C44.5781 44.1633 44.2414 44.5 43.8281 44.5V45.5C44.7937 45.5 45.5781 44.7156 45.5781 43.75H44.5781ZM44.5781 31.25V43.75H45.5781V31.25H44.5781ZM43.8281 30.5C44.2414 30.5 44.5781 30.8367 44.5781 31.25H45.5781C45.5781 30.2844 44.7937 29.5 43.8281 29.5V30.5ZM41.3281 30.5H43.8281V29.5H41.3281V30.5ZM40.5781 31.25C40.5781 30.8367 40.9148 30.5 41.3281 30.5V29.5C40.3625 29.5 39.5781 30.2844 39.5781 31.25H40.5781ZM40.5781 40V31.25H39.5781V40H40.5781ZM20 40.5H40.0781V39.5H20V40.5ZM19.5 20V40H20.5V20H19.5ZM28.8281 19.5H20V20.5H28.8281V19.5ZM29.5781 18.75C29.5781 19.1633 29.2414 19.5 28.8281 19.5V20.5C29.7937 20.5 30.5781 19.7156 30.5781 18.75H29.5781ZM29.5781 16.25V18.75H30.5781V16.25H29.5781ZM28.8281 15.5C29.2414 15.5 29.5781 15.8367 29.5781 16.25H30.5781C30.5781 15.2844 29.7937 14.5 28.8281 14.5V15.5ZM16.25 15.5H28.8281V14.5H16.25V15.5ZM15.5 16.25C15.5 15.8367 15.8367 15.5 16.25 15.5V14.5C15.2844 14.5 14.5 15.2844 14.5 16.25H15.5ZM15.5 43.75V16.25H14.5V43.75H15.5ZM16.25 44.5C15.8367 44.5 15.5 44.1633 15.5 43.75H14.5C14.5 44.7156 15.2844 45.5 16.25 45.5V44.5ZM36.3281 35.5C37.2937 35.5 38.0781 34.7156 38.0781 33.75H37.0781C37.0781 34.1633 36.7414 34.5 36.3281 34.5V35.5ZM25.0781 35.5H36.3281V34.5H25.0781V35.5ZM24.5781 23.75V35H25.5781V23.75H24.5781ZM26.3281 22C25.3625 22 24.5781 22.7844 24.5781 23.75H25.5781C25.5781 23.3367 25.9148 23 26.3281 23V22ZM28.8281 22H26.3281V23H28.8281V22ZM30.5781 23.75C30.5781 22.7844 29.7937 22 28.8281 22V23C29.2414 23 29.5781 23.3367 29.5781 23.75H30.5781ZM30.5781 26.4648V23.75H29.5781V26.4648H30.5781ZM40.8222 15.0117L29.7245 26.1113L30.4317 26.8184L41.5294 15.7188L40.8222 15.0117ZM42.0605 14.5C41.5959 14.5 41.1531 14.6835 40.8237 15.0102L41.5279 15.7203C41.6711 15.5782 41.8612 15.5 42.0605 15.5V14.5ZM45.0781 14.5H42.0605V15.5H45.0781V14.5ZM45.5781 18.0176V15H44.5781V18.0176H45.5781ZM45.0664 19.2539C45.3948 18.9256 45.5781 18.4819 45.5781 18.0176H44.5781C44.5781 18.2173 44.4997 18.4065 44.3593 18.5468L45.0664 19.2539ZM33.9668 30.3536L45.0664 19.2539L44.3593 18.5468L33.2597 29.6464L33.9668 30.3536ZM36.3281 29.5H33.6133V30.5H36.3281V29.5ZM38.0781 31.25C38.0781 30.2844 37.2937 29.5 36.3281 29.5V30.5C36.7414 30.5 37.0781 30.8367 37.0781 31.25H38.0781ZM38.0781 33.75V31.25H37.0781V33.75H38.0781Z"
                    fill = "black" / >
                        <
                        /svg>

                </button>
            </Fragment>
        );
    }
}

export default CMSSidebar;