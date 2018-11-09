import React, {Component} from 'react';
import { Link, } from 'react-router-dom';
import styles from './domain.module.scss';
import { composeClasses } from '../../utils';

const optionMock = [
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: false,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: false,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
    {
        domain: 'hellow.com',
        price: 'N3,400 / year',
        availability: true,
    },
];

class Domain extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
            selectedOption: null, //NOTE: this is used to denote a default state of an array index
        };
    }

    onInputChange(e) {
        this.setState({
            input: e.target.value,
            selectedOption: null
        });
    }

    selectOptionHandler(e) {
        e.preventDefault();
        // TODO: write logic to get the selected option
        this.setState({
            selectedOption: 1
        });
    }

    render() {
        const {input, selectedOption} = this.state;
        return(
            <div className={styles.domainContainer}>
                <div className={styles.domainIntro}>
                    <h3>Search for YOUR DOMAIN.</h3>
                    <p>
                        Find and select your preferred domain name in the field below. <Link to='#'>Learn more</Link>
                    </p>
                </div>
                <form action="#" className={styles.domainForm}>
                    <input
                        onChange={(e) => this.onInputChange(e)}
                        type="text"
                        placeholder='yourname.com'
                    />
                </form>
                <ul
                    className={composeClasses(styles.domainOptions, input && styles.show, selectedOption && styles.hide)}
                    onClick={(e) => this.selectOptionHandler(e)}
                >
                    {optionMock && Array.isArray(optionMock) && optionMock.map(option => (
                        <li className={!option.availability && styles.unavailable}>
                            <span className={styles.domainName}>{option.domain}</span>
                            <span className={styles.domainDetails}>{option.availability ? option.price : 'UNAVAILABLE'}</span>
                        </li>
                    ))}
                </ul>
                <div className={composeClasses(styles.selectedOption, selectedOption && styles.show)}>
                    <p>for N3,400 per year</p>
                    <Link to='/pricing' className={styles.continueButton}>Continue</Link>
                </div>
            </div>
        );
    }
}

export default Domain;