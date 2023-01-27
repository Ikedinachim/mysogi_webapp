import React from 'react';
import classes from './SectionThree.module.css';
const SectionThree = () => {
    return (
        <div className={classes['section-three']} > 
            <img src="../assets/sectionthree.png" alt="" />
            <div className={classes['right-div']}>
                <h1>Smart</h1>
                <h1><span>SMS</span></h1>
                <h1>Ads</h1>
                <div className={classes['rectangle']}></div>
                <b>What's this?</b>
                <p>
                In less than 15 minutes  and with access to our 73,000,000 audience, you could easily start running your own SMS marketing campaign without having to deal with complex computer systems and endless set up. 
                </p>
            </div>
            
        </div>
    );
};

export default SectionThree;