import React from 'react';
import classes from './Home.module.css';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';
import WhyMySogi from '../sections/WhyMySogi';
import BuildMySogi from '../sections/BuildMySogi';
import AskSection from '../sections/AskSection';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <React.Fragment>

        <div className={classes.home}>
         

            <div className={classes['left-div']}>
                <h3>Advertise. Connect. Convert.</h3>
                <div className={classes.rectangle}></div>
                <h1>Grow your business with <span>Mysogi</span> Ads.</h1>
                <h2>The most powerful advertisting solution for your brand</h2>
                <button className={classes['get-started-btn']}>
                    Get Started
                </button>
            </div>
              <img src="../assets/bg-1.png" alt="image" />
            </div>
            
     
        <div className={classes['description-div']}>
            <p>Mysogi Company Limited is a tech company that specializes in Digital Marketing. Our State Of the Art web-based digital campaign manager enables Agencies, Corporations & SMEs to promote and target adverts to prospective customers.</p>

        </div>
         <SectionTwo/> 
        <SectionThree/>
        <SectionFour />
        <SectionFive />
        <SectionSix/>
        <WhyMySogi />
        <BuildMySogi />
        <AskSection />
        <Footer/>
        </React.Fragment>
    );
};

export default Home;