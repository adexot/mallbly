import React, {Component, Fragment } from 'react';
import ReactSVG from "react-svg";
import CMSSidebar from '../../components/CMSSidebar';
import styles from './cms.module.scss'
import TestTheme from '../../themes/testTheme';
import { composeClasses } from "../../utils";

class CMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            actionXY: {},
            openModal: false
        };
    }

    toggleSidebar(){
        this.setState(prevState => ({
            sidebarOpen: !prevState.sidebarOpen
        }));
    }

    closeModal(){
        this.setState({
            openModal: false
        });
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

    componentDidMount() {
        document
            .getElementById('themeContainer')
            .addEventListener('mousedown', (e) => {
                if(e.target.tagName.toLowerCase() === 'img'){
                    this.setState({
                        openModal: true
                    });
                    return;
                }
                this.selectedPosition = {
                    x: this.state.sidebarOpen ? e.pageX - 50 : e.pageX,
                    y: e.pageY
                }
            });

        document
            .getElementById('themeContainer')
          .addEventListener('mouseup', e => {
            const selected = window.getSelection().toString();
            if (selected !== "") {
              console.log(selected);
              const clientXY = {
                left: (e.pageX + this.selectedPosition.x) / 2,
                top: e.pageY - 70
              };
              console.log(clientXY);
              this.setState({
                actionXY: clientXY
              });
            } else {
              const clientXY = { top: 0, left: 0 };

              this.setState({ actionXY: clientXY });
            }
          });
    }

    displayActionMenu(option = { top: 0, left: 0 }, show = false) {
        return (
            <ul
                className={composeClasses(styles.actionMenu, show && styles.show)}
                style={{ top: option.top, left: option.left }}
            >
                <li><span><ReactSVG src='bold.svg' /></span></li>
                <li><span><ReactSVG src='italics.svg' /></span></li>
                <li><span><ReactSVG src='undeline.svg' /></span></li>
                <li><span><ReactSVG src='text.svg' /></span></li>
                <li><span><ReactSVG src='link.svg' /></span></li>
                <li><span><ReactSVG src='link.svg' /></span></li>
            </ul>
        )
    }

    renderImageChangeModal(){
        return <div className={styles.modalContainer} onClick={() => this.closeModal()}>
            <div className={styles.boxWrapper}>
              <h3>Image Upload</h3>
              <div className={styles.imageInput}>
                <label htmlFor="image">Upload</label>
                <input type="file" name='image' id='image' className={styles.hide} />
              </div>
            </div>
          </div>;
    }

    render(){
        const {actionXY, openModal} = this.state;

        return <Fragment>
            <div className={styles.sidebarContainer}>
              <CMSSidebar isClose={this.state.sidebarOpen} visibilityHandler={() => this.toggleSidebar()} />
            </div>
            <div
                className={composeClasses(styles.themeContainer, this.state.sidebarOpen && styles.full)}
                id='themeContainer'
            >
              <TestTheme />
            </div>
            {this.displayActionMenu(actionXY, actionXY.left ? true : false)}
            {openModal && this.renderImageChangeModal()}
            {/* {this.renderPublishStrip()} */}
          </Fragment>;
    }
}

export default CMS;