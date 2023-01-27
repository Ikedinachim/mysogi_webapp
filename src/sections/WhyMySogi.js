import React from 'react';
import WhyContainer from '../components/WhyContainer';
import classes from './WhyMySogi.module.css';
const WhyMySogi = () => {
    return (
        <div className={classes.section}>
            <h2><span>Why</span> Mysogi?</h2>
            <div className={classes.container}>
               <WhyContainer 
               imagePath = "../assets/invest.png" 
               title = 'High return on Investment' 
               content = "We provide a well optimised system that allows you access to all you need to grow your business, thereby giving you your money's worth of service"/>
                <WhyContainer 
               imagePath = "../assets/increase.png" 
               title = 'High return on Investment' 
               content = "We allow you to focus on the people who are searching for what your business offers. Watch your number increase with our transparent process."/>
                <WhyContainer 
               imagePath = "../assets/target.png" 
               title = 'Target Demography' 
               content = "We target on the basis of age, gender and location to communicate with relevance and precision."/>
            </div>
        </div>
    );
};

export default WhyMySogi;