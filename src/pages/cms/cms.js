import React, {Component, Fragment } from 'react';
import CMSSidebar from '../../components/CMSSidebar';
import styles from './cms.module.scss'
import TestTheme from '../../themes/testTheme';
import { composeClasses } from "../../utils";

class CMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }

    toggleSidebar(){
        this.setState(prevState => ({
            sidebarOpen: !prevState.sidebarOpen
        }));
    }

    renderPublishStrip() {
        const { activeSection } = this.state;
        return (
            <div className={composeClasses(styles.publishStrip, activeSection && styles.hide)}>
                <span>Done editing? Publish your site now</span>
                <button className={styles.publishButton} onClick={() => this.setFullSectionContent('domain')}>Publish Site</button>
            </div>
        );
    }

    render(){
        return <Fragment>
            <div className={styles.sidebarContainer}>
              <CMSSidebar isClose={this.state.sidebarOpen} visibilityHandler={() => this.toggleSidebar()} />
            </div>
            <div className={composeClasses(styles.themeContainer, this.state.sidebarOpen && styles.full)}>
              <TestTheme />
            </div>
            {this.renderPublishStrip()}
          </Fragment>;
    }
}

export default CMS;