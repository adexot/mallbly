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

    render(){
        return <Fragment>
            <div className={styles.sidebarContainer}>
              <CMSSidebar
                isClose={this.state.sidebarOpen}
                visibilityHandler = {() =>
                  this.toggleSidebar()
              }/>
            </div>
            <div
                className={composeClasses(styles.themeContainer, this.state.sidebarOpen && styles.full)}
            >
              <TestTheme />
            </div>
          </Fragment>;
    }
}

export default CMS;