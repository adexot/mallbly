import React, {Component, Fragment} from 'react';
import ReactSVG from 'react-svg';
import styles from './pricing.module.scss';
import {composeClasses} from '../../utils';
import {paymentGateway} from '../../config';


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

const checkoutSteps = {
    ONE: 'checkoutDetails',
    TWO: 'paymentGateway',
    THREE: 'paymentResult'
};

class Pricing extends Component{
    constructor(props){
        super(props);

        this.state = {
            checkoutStep: checkoutSteps.ONE,
            selectedSubscription: null,
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

    getTotal() {
        const { selectedSubscription } = this.state;
        const totalPrice = domainDetails.price + (selectedSubscription && selectedSubscription.price) || 0;

        return totalPrice;
    }

    renderCheckoutDetails() {
        const {selectedSubscription} = this.state;

        return(
            <Fragment>
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
                        <span>{this.getTotal()}</span>
                    </div>
                    <button
                        className={styles.payButton}
                        onClick={() => this.setCheckoutStep('two')}
                    >Pay N{this.getTotal()}</button>
                </div>
            </Fragment>
        );
    }

    setCheckoutStep(step) {
        if(!this.state.selectedSubscription){
            // TODO: add a notification to let the user know, he/she needs to select a plan
            return;
        }

        step = step.toUpperCase();
        if (!Object.keys(checkoutSteps).includes(step)) return;

        this.setState({
            checkoutStep: checkoutSteps[step]
        });
    }

    renderRightColumnContent(step) {
        switch (step) {
          case "checkoutDetails":
            return this.renderCheckoutDetails();
          case "paymentResult":
            return this.renderPaymentResult();
          case "paymentGateway":
            return this.renderPaymentGateway();
          default:
            return this.renderCheckoutDetails();
        }
    }

    renderPaymentGateway(){
        return (
            <Fragment>
                <div className={styles.menuHeader}>CHECKOUT</div>
                <div className={styles.paymentContent}>
                    <div id='paystackEmbedContainer'></div>
                </div>
            </Fragment>
        );
    }

    handlePayment() {
        if(this.state.selectedSubscription){
            if (!window.PaystackPop) {
                console.log('PaystackPop instance not available');
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'Unable to connect to Payment gateway, please check your internet connection.';
                errorDiv.setAttribute('style', 'background-color:#f55;border-radius:5px;font-size:14px;padding:10px;color:#fff;');
                document.getElementById('paystackEmbedContainer').appendChild(errorDiv);
                return;
            }

            const paymentDetails = {
                key: paymentGateway.key,
                email: paymentGateway.email,
                amount: this.getTotal(),
                container: 'paystackEmbedContainer',
                callback: function (response) {
                    alert('successfully subscribed. transaction ref is ' + response.reference);
                }
            };

            window.PaystackPop.setup(paymentDetails);
        }

        // TODO: integrate a flash for notification
        console.log('No subscription plan has been selected');
    }

    componentDidMount() {
        // load the payment gateway script
        if (!document.getElementById('paymentScript')) {
            const paymentScript = document.createElement('script');
            paymentScript.src = paymentGateway.scriptUrl;
            paymentGateway.id = 'paymentScript';
            document.body.appendChild(paymentScript);
        }
    }

    componentWillUnmount() {
        // remove the payment script from the DOM
        if (document.getElementById('paymentScript')) document.removeChild('paymentScript');
    }

    componentDidUpdate() {
        if(this.state.checkoutStep !== 'paymentGateway') return;
        this.handlePayment();
    }

    render(){
        const {selectedSubscription, checkoutStep} = this.state;
        const duration = selectedSubscription && selectedSubscription.duration;

        return(
            <div className={styles.pageWrapper}>
                <ReactSVG src='arrow-left-long.svg' className={styles.backArrow}/>
                <div className={styles.leftColumn}>
                    <div className={checkoutStep !== 'checkoutDetails' && styles.overlay}></div>
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
                                    <div className={styles.radio}>
                                        {duration === 1 && <ReactSVG src='mark.svg' />}
                                    </div>
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
                                    <div className={styles.radio}>
                                        {duration === 12 && <ReactSVG src='mark.svg'/>}
                                    </div>
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
                    {this.renderRightColumnContent(checkoutStep)}
                </div>
            </div>
        );
    }
}

export default Pricing;