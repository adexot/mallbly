import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import styles from './pricing.module.scss';
import {composeClasses} from '../../utils';


const subscriptionPlans = {
    MONTHLY: {
        title: 'Subscription Fee',
        duration: 1,
        price: 1999,
        save: 0,
        description: 'This should be a sub-text that needs to be filled up, maybe not on to the next line. Just text'
    },
    YEARLY: {
        title: 'Subscription Fee',
        duration: 12,
        price: 11999,
        save: 1999,
        description: 'This should be a sub-text that needs to be filled up, maybe not on to the next line. Just text'
    }
};

const domainDetails = {
    title: 'Domain name',
    price: 3400,
    description: 'This should explain what domain is about and make it simpler to buy.'
}

class Pricing extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedSubscription: null
        };
    }

    handleSubscriptionSelection(sub){
        this.setState({
            selectedSubscription: sub
        });
    }

    renderItemBox(details) {
        const {title, price, description} = details;
        return (
            <div className={styles.itemBox}>
                <header>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.price}>{price}</span>
                </header>
                <p>{description}</p>
            </div>
        );
    }

    render(){
        const {selectedSubscription} = this.state;
        const duration = selectedSubscription && selectedSubscription.duration;
        const totalPrice = domainDetails.price + (selectedSubscription && selectedSubscription.price) || 0;

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
                            <div className={composeClasses(styles.subscriptionBox, styles.priceBox, duration === 1 && styles.selected)}>
                                <div className={styles.center}>
                                    <span className={styles.radio}></span>
                                </div>
                                <div className={styles.price}>1,999</div>
                                <div className={styles.billing}>MONTHLY BILLING</div>
                                <div className={styles.grey}>NO SAVINGS</div>
                                <div className={styles.buttonDiv}>
                                    <button onClick={() => this.handleSubscriptionSelection(subscriptionPlans.MONTHLY)}>
                                    Select Plan
                                    </button>
                                </div>
                            </div>
                            <div className={composeClasses(styles.subscriptionBox, styles.priceBox, duration === 12 && styles.selected)}>
                                <div className={styles.center}>
                                    <span className={styles.radio}></span>
                                </div>
                                <div className={styles.price}>11,999</div>
                                <div className={styles.billing}>12 MONTHS</div>
                                <div className={styles.yellow}>SAVE N11,989</div>
                                <div className={styles.buttonDiv}>
                                    <button onClick={() => this.handleSubscriptionSelection(subscriptionPlans.YEARLY)}>
                                    Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.menuHeader}>CHECKOUT</div>
                    <div className={styles.checkoutContent}>
                        <p className={styles.intro}>Here’s what you are paying for</p>
                        {this.renderItemBox(domainDetails)}
                        {
                            selectedSubscription && this.renderItemBox(selectedSubscription)
                        }
                    </div>
                    <div className={styles.checkoutDetails}>
                        <div className={styles.totalDiv}>
                            <span>TOTAL</span>
                            <span>{totalPrice}</span>
                        </div>
                        <button className={styles.payButton}>Pay N{totalPrice}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;