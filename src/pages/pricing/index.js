import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import styles from './pricing.module.scss';
import {composeClasses} from '../../utils';

class Pricing extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.pageWrapper}>
                <ReactSVG src='arrow-left-long.svg' className={styles.backArrow}/>
                <div className={styles.leftColumn}>
                    <div className={styles.subscription}>
                        <header>SELECT SUBSCRIPTION PLAN</header>
                        <div className={styles.subscriptionPlans}>
                            <div className={styles.subscriptionBox}>
                                <ul>
                                    <li>Unlimited Bandwidth</li>
                                    <li>Unlimited Storage</li>
                                    <li>Mobile-Optimized Website</li>
                                    <li>Website Metrics</li>
                                    <li>SSL Security Included</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div>
                            <div className={composeClasses(styles.subscriptionBox, styles.priceBox)}>
                                <div>
                                    <input type="radio" />
                                </div>
                                <div className={styles.price}>1,999</div>
                                <div className={styles.billing}>MONTHLY BILLING</div>
                                <div className={styles.grey}>NO SAVINGS</div>
                                <div className={styles.buttonDiv}>
                                    <button>Select Plan</button>
                                </div>
                            </div>
                            <div className={composeClasses(styles.subscriptionBox, styles.priceBox)}>
                                <div>
                                    <input type="radio" />
                                </div>
                                <div className={styles.price}>11,999</div>
                                <div className={styles.billing}>MONTHLY BILLING</div>
                                <div className={styles.yellow}>SAVE N11,989</div>
                                <div className={styles.buttonDiv}>
                                    <button>Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.menuHeader}>CHECKOUT</div>
                    <div className={styles.checkoutContent}>
                        <p className={styles.intro}>Here’s what you are paying for</p>
                        <div className={styles.itemBox}>
                            <header>
                                <span className={styles.title}>Domain name</span>
                                <span className={styles.price}>N3,400</span>
                            </header>
                            <p>
                                This should explain what domain is about and make it simpler to buy.
                            </p>
                        </div>
                    </div>
                    <div className={styles.checkoutDetails}>
                        <div className={styles.totalDiv}>
                            <span>TOTAL</span>
                            <span>N3,400</span>
                        </div>
                        <button className={styles.payButton}>Pay N3,400</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;