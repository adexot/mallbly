import React from 'react';
import styles from './gallery.module.scss';
import Sidebar from '../../Sidebar';

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

const Gallery = () => (
    <div className={styles.gallery}>
        <div className={styles.flexContainer}>
            <div className={styles.sidebarContainer}>
                <header>MEDIA GALLERY</header>
                <Sidebar />
            </div>
            <div className={styles.themeListing}>
                <header>
                    <span>Albums - 6 Files </span>
                    <button
                        className={styles.changeButton}
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
    </div>
);

export default Gallery;