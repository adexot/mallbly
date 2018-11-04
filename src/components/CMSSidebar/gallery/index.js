import React, { Component, Fragment } from 'react';
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

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            step: 0
        };
    }

    toggleOpen(value) {
        this.setState({
            isOpen: value
        })
    }

    addAlbumStepOne() {
        return (
            <form action="#">
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Album Title
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Release Date
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Description
                                </label>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Track Title 1
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Track Title 2
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Track Title 3
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="">
                        Track Title 4
                                </label>
                    <input type="text" placeholder='' />
                </div>
                <div className={styles.reverseFlex}>
                    <button className={styles.addTrackButton}>
                        + Add Another Track
                                </button>
                </div>
                <div className={styles.reverseFlex}>
                    <button
                        className={styles.continueButton}
                        onClick={(e) => this.switchStep(1)}
                    >Continue</button>
                </div>
            </form>
        );
    }

    addAlbumStepTwo() {
        return (
            <Fragment>
                <div>
                    <h4>Upload album cover</h4>
                    <div className={styles.albumCoverContainer}>
                        <div className={styles.image}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.imageUpload}></div>
                    </div>
                </div>
                <div className={styles.urlDownloadHeader}>
                    <h4>Download Platforms URL</h4>
                </div>
                <form action="#">
                    <div className={styles.inputGroup}>
                        <label htmlFor="">
                            Apple Music
                    </label>
                        <input type="text" placeholder='Enter url here' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="">
                            Spotify
                    </label>
                        <input type="text" placeholder='Enter url here' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="">
                            Deezer
                    </label>
                        <input type="text" placeholder='Enter url here' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="">
                            Soundcloud
                    </label>
                        <input type="text" placeholder='Enter url here' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="">
                            Other URL
                    </label>
                        <input type="text" placeholder='Enter url here' />
                    </div>
                    <div className={styles.reverseFlex}>
                        <button className={styles.addTrackButton}>
                            + Add Another Track
                    </button>
                    </div>
                    <div className={styles.reverseFlex}>
                        <button
                            className={styles.continueButton}
                            onClick={(e) => {
                                e.preventDefault();
                                this.switchStep(2);
                            }
                            }
                        >Continue</button>
                    </div>
                </form>
            </Fragment>
        );
    }

    addAlbumStepThree() {
        return (
            <Fragment>
                <div className={styles.albumImage}>
                    <img src="" alt="" />
                </div>
                <div className={styles.albumDetails}>
                    <h4>TRACKLISTING</h4>
                    <ul>
                        <li>Lorem Ipsum Dolor</li>
                        <li>Contrary to popular belief</li>
                        <li>Remaining essentially unchanged</li>
                        <li>Passage of Lorem Ipsum</li>
                        <li>Finibus Bonorum et Malorum</li>
                        <li>Consectetur adipiscing elit</li>
                    </ul>
                    <div>Released June 2017</div>
                    <div>Recorded &amp; mastered in Lagos, Nigeria</div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                </div>
            </Fragment>
        );
    }

    renderAddAlbumStep(value) {
        switch (value) {
            case 0:
                return this.addAlbumStepOne();
            case 1:
                return this.addAlbumStepTwo();
            case 2:
                return this.addAlbumStepThree();
            default:
                return this.addAlbumStepOne();
        }
    }

    switchStep(step) {
        this.setState({
            step
        });
    }

    render() {
        const { isOpen, step } = this.state;
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
                        <span>
                            {step !== 2 ?
                                <h3>ADD AN ALBUM</h3>
                                :
                                <div>
                                    <div className={styles.albumDetailsHeader}>
                                        <h3>SAMPLE ALBUM TITLE</h3>
                                        <button
                                            className={styles.changeButton}
                                            onClick={() => this.switchStep(0)}
                                        >Edit</button>
                                    </div>
                                    <h4 className={styles.grey}>150</h4>
                                </div>
                            }
                        </span>
                        <span
                            className={styles.closeButton}
                            onClick={() => this.toggleOpen(false)}
                        >
                            <ReactSVG src='close-section.svg' />
                        </span>
                    </header>
                    <div className={styles.content}>
                        {this.renderAddAlbumStep(step)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;