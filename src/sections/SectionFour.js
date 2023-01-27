import React from 'react';
import classes from './SectionFour.module.css';
const SectionFour = () => {
    return (
        <div className={classes['section-four']} > 
            <div className={classes['left-div']}>
                <h1>High</h1>
                <h1><span>Visual</span></h1>
                <h1>Display Ads</h1>
                <div className={classes['rectangle']}></div>
                <b>What's this?</b>
                <p>
                Put an end to outdated media buying with MySogi Ads, the latest visual display ad solution that lets you get instant, high-impact advertisements in a matter of minutes.
                </p>
            </div>
            <img src="../assets/sectionfour.png" alt="" />
            
        </div>
    );
};

export default SectionFour;