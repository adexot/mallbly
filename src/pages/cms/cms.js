import React, {Component, Fragment } from 'react';
import CMSSidebar from '../../components/CMSSidebar';
import styles from './cms.module.scss'
import SinglePage from '../../themes/singlePage';

class CMS extends Component {
    render(){
        return (
            <Fragment>
                <CMSSidebar />
                <div className={styles.themeContainer}>
                    <SinglePage />
                </div>
            </Fragment>
        );
    }
}

export default CMS;