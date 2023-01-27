import React from 'react';
import classes from './SectionFive.module.css';
const SectionFive = () => {
    return (
        <div className={classes['section-five']} > 
            <img src="../assets/sectionfive.png" alt="" />
            <div className={classes['right-div']}>
                <h1>Voice</h1>
                <h1><span>Ads</span></h1>
               
                <div className={classes['rectangle']}></div>
                <b>What's this?</b>
                <p>
                Our software runs Voice Ads campaigns, an easy way to increase sales and subscriptions with prerecorded audio ads, allowing you conduct mass outbound calling campaigns with the click of a button.
                </p>
            </div>
            
        </div>
    );
};

export default SectionFive;