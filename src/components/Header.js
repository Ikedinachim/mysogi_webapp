import React, { useState } from 'react';
import classes from './Header.module.css';

const Header = () => {
    const [isShowing, showNav] = useState(false);
    let navMenu =     <div className={classes['side-drawer']}>
        <div  className={classes['close-row-div']}>
        <p>Campaigns</p>
        <img src="../assets/close-icon.png" onClick = {() => {showNav(false)}} alt="menu-icon"  />

    </div>
    <p>Contact Us</p>
    <a href="#">Login</a>
    <button>Get Started</button>
</div>;

    return (
        <React.Fragment>
        <div className={classes.header}>
            <div className={classes['new-billboard']}>
                <button  className={classes['new-billboard-btn']} >
                    New Billboard!
                </button>
                 <h3>A new billboard is available</h3>
                 <a href='#'>Learn more 
                 <img src="../assets/arrow.png" alt="" />
                 </a>
            </div>
            <div  className={classes['main-header']}>
                <img className={classes['main-logo']} src="../assets/logo.png" alt="logo"  />
                <img className={classes.logo} src="../assets/logo2.png" alt="logo2"  />
                <img className={classes.menu} onClick = {() => {showNav(true)}} src="../assets/menu.png" alt="menu-icon"  />
                <div className = {classes['link-div']}>
                <a href="#" className={classes['campaign-tag']}>Campaigns</a>
                <a href="#">Contact Us</a>

                </div>
                <div className={classes.logandb}>
                <a href="#"  className={classes['login-link']}>Login</a>
                <button  className={classes['get-started-btn']}>Get Started</button>

                </div>

            </div>
            
        </div>
        {isShowing && navMenu}
    
        </React.Fragment>
    );
};

export default Header;