import React from "react";
import classes from "./AskSection.module.css";

const AskSection = () => {
    return (
            <div className={classes.overlay}>
        <div className={classes["ask-section"]}>

            <div className={classes["left-div"]}>
                <p>
                    I’m a <span>brand owner</span>, looking to create <span>brand awareness</span>
                </p>
                <h1>Have questions? Let’s discuss.</h1>
            </div>

            <div className={classes["right-div"]}>
                {/* <form action="submit"> */}
                    <div className={classes["input-div"]}>
                        <p>First Name</p>
                        <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className={classes["input-div"]}>
                        <p>Email address</p>
                        <input type="text" placeholder="Enter your email address" />
                    </div>
                    <div className={classes["phone-input"]}>    
                        <p>Phone number</p>
                        <div className={classes["phone-div"]}>
                            <input className={classes["phone-drop"]} type="number" step={1} min={+1} max="596" defaultValue="234" />

                            <input className={classes["phone-field"]} type="tel" />
                        </div>
                    </div>
                    <div className={classes["input-div"]}>
                        <p>Notes</p>
                        <input type="text" placeholder="Enter your question/complaint" />
                    </div>
                    <button className={classes["submit-btn"]}>Sumbit</button>
                {/* </form> */}
            </div>
            </div>
        </div>
    );
};

export default AskSection;
