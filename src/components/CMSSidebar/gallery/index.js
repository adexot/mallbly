import React, {Component} from 'react';
import styles from './gallery.module.scss';
import ReactSVG from 'react-svg';
import { composeClasses } from '../../../utils';

const sideMenu = [
    {
        title: 'Images',
        subMenu: []
    },
    {
        title: 'Audio',
        subMenu: ['Singles', 'Albums']
    },
    {
        title: 'Video',
        subMenu: []
    },
    {
        title: 'Documents',
        subMenu: []
    }
];

const albumList = [
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
    {
        image: 'images/theme_5.png',
        title: 'Graphic Designer',
        songs: 12,
        timeFrame: '1hr 35min',
        date: 'Aug 2016'
    },
];

class Gallery extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleOpen(value) {
        this.setState({
            isOpen: value
        })
    }

    render() {
        const {isOpen} = this.state;
        return (
            <div className={styles.gallery}>
                <div className={styles.flexContainer}>
                    <div className={styles.sidebarContainer}>
                        <header>MEDIA GALLERY</header>
                        <ul className={styles.sideMenu}>
                            {sideMenu && Array.isArray(sideMenu) && sideMenu.map(item => (
                                <li>
                                    <h5>{item.title}</h5>
                                    <ul>
                                        {
                                            item.subMenu.length > 0 && item.subMenu.map(menu => (
                                                <li>{menu}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.themeListing}>
                        <header>
                            <span>Albums - 6 Files </span>
                            <button
                                className={styles.changeButton}
                                onClick={() => this.toggleOpen(true)}
                            >Upload</button>
                        </header>
                        <div className={styles.albumListing}>
                            {
                                albumList && Array.isArray(albumList) && albumList.map((theme, index) => (
                                    <div className={styles.galleryItem}>
                                        <img src={theme.image} alt={theme.title} />
                                        <div className={styles.title}>{theme.title}</div>
                                        <div>
                                            <span>{theme.songs} songs - </span>
                                            <span>{theme.timeFrame}</span>
                                        </div>
                                        <div>
                                            <span>{theme.date}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={composeClasses(styles.rightSidebar, isOpen ? styles.open : '')}>
                    <header>
                        <span>ADD AN ALBUM</span>
                        <span
                            className={styles.closeButton}
                            onClick={() => this.toggleOpen(false)}
                        >
                            <ReactSVG src='close-section.svg' />
                        </span>
                    </header>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;