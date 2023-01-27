import React from 'react';
import classes from './BuildMySogi.module.css';
const BuildMySogi = () => {
    return (
        <div className={classes['section-seven']} > 
        <div className={classes['left-div']}>
            <h1>Build your Brand with <span>Mysogi</span></h1>
           
            <p>The smartads company...</p>
        <img className={classes.mobImage} src="../assets/mysogipic.png" alt="" />
            <button >
                Join Mysogi Today
            </button>
        </div>
        <img className={classes.sogiImage} src="../assets/mysogiapp.png" alt="" />
        
    </div>
    );
};

export default BuildMySogi;