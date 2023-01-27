import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <div className={classes.footer}>
                <div className={classes['icons-div']}>
                    <img src="../assets/logowhite.png" alt="" />
                    <div className={classes.icons}>
                    <img src="../assets/twitter.png" alt="" />
                    <img src="../assets/instagram.png" alt="" />
                    <img src="../assets/telegram.png" alt="" />
                    <img src="../assets/youtube.png" alt="" />
                    <img src="../assets/facebook.png" alt="" />
                    </div>
                </div>
            <div className={classes['inner-footer']}>
                <div  className={classes['links']}>
                    <h2>Quick Links</h2>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">FAQs</a>
                    <a href="#">Help center</a>
                </div>
                <div  className={classes['links']}>
                    <h2>OUR SERVICES</h2>
                    <a href="#">Ecommerce Mini Store</a>
                    <a href="#">Smart SMS Ads</a>
                    <a href="#">Influencer Marketing</a>
                    <a href="#">Digital Ads</a>
                    <a href="#">Voice SMS</a>
                    <a href="#">Billboard Marketing</a>
                </div>
                <div  className={classes['links']}>
                    <h2>Contact Info</h2>
                    <p>9, Adedoyin Ogungbe Crescent,Lekki Phase 1, Lagos, Nigeria.</p>
                    <p>+2348122089773</p>
                    <p>info@mysogi.com.ng</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;