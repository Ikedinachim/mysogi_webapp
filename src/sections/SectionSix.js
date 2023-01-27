import React from 'react';
import classes from './SectionSix.module.css';
const SectionSix = () => {
    return (
        <div className={classes['section-six']} > 
        <div className={classes['left-div']}>
            <h1>Influencer</h1>
            <h1><span>Marketing</span></h1>
            <h1>Ads</h1>
            <div className={classes['rectangle']}></div>
            <b>What's this?</b>
            <p>
            Mysogi ads offers the ideal platform for advertisers to engage influencers to promote their products and services on their social media platforms at a cost.
            </p>
        </div>
        <img src="../assets/sectionsix.png" alt="" />
        
    </div>
    );
};

export default SectionSix;