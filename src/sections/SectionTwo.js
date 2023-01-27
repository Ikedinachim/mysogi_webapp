import React from 'react';
import classes from './SectionTwo.module.css';
const SectionTwo = () => {
    return (
        <div className={classes['section-two']} > 
            <div className={classes['left-div']}>
                <h1>Billboard</h1>
                <h1><span>Campaign</span></h1>
                <h1>Ads</h1>
                <div className={classes['rectangle']}></div>
                <b>What's this?</b>
                <p>
                Put your brand on digital billboards in just a few taps starting from 30k/day. No contracts and no upfront pricing required. Get the best quality for the cheapest price.
                </p>
            </div>
            <img src="../assets/sectiontwo.png" alt="" />
            
        </div>
    );
};

export default SectionTwo;