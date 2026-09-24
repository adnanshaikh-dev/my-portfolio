import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";

import classes from "./contactForm.module.css";
import Button from "../UI/Button";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";

// 🚀 NEW IMPORT: EmailJS browser framework package pull kiya
import emailjs from '@emailjs/browser';

const ContactForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);

    // Form inputs validation hooks configurations (100% Untouched)
    const { value: enteredName, hasError: nameInputHasError, isValid: enteredNameIsValid, valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler } = useInput(value => value.trim() !== '');
    const { value: enteredPhone, hasError: phoneInputHasError, isValid: enteredPhoneIsValid, valueChangeHandler: phoneChangedHandler, inputBlurHandler: phoneBlurHandler } = useInput(value => value.trim().length >= 10);
    const { value: enteredEmail, hasError: emailInputHasError, isValid: enteredEmailIsValid, valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler } = useInput(value => value.includes('@'));
    const { value: enteredMessage, hasError: messageInputHasError, isValid: enteredMessageIsValid, valueChangeHandler: messageChangedHandler, inputBlurHandler: messageBlurHandler } = useInput(value => value.trim().length >= 10);

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid && enteredPhoneIsValid) {
        formIsValid = true;
    }

    const [btnText, setBtnText] = useState('Send Message');
    const [isSent, setIsSent] = useState(false);
    const [enteredLName, setEnteredLName] = useState('');

    const lastNameChangeHandler = (event) => {
        setEnteredLName(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        
        // 🚀 UPDATED SCHEMA: EmailJS ke variables ke mutabik names convert kiye hain
        const templateParams = {
            from_name: enteredName + " " + enteredLName,
            from_email: enteredEmail,
            from_phone: enteredPhone,
            message: enteredMessage,
        };
        
        finishEnteringHandler();
        sendMessageHandler(templateParams);
    }
    
    // 🚀 NEW HANDLER: Direct Email forwarding loop engine
    const sendMessageHandler = async (templateParams) => {
        setBtnText('Sending ...');
        setIsSent(true);

        // 🧠 ALERT CONFIGURATION: Apni real-time IDs ko yahan brackets ke andar badal dena bas!
        const SERVICE_ID = "service_11c3dp6";     // 👈 Step 2 se mila hua Service Id paste karein
        const TEMPLATE_ID = "template_a8g4zse";   // 👈 Step 2 se mila hua Template Id paste karein
        const PUBLIC_KEY = "I1NBSRFbM3hlAf4SK";     // 👈 Step 2 se mila hua Public Key paste karein

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setBtnText('Message Sent ✔');
        } catch (error) {
            console.log("Email Delivery Error alert stack track:", error);
            setBtnText('Failed to Send');
            setIsSent(false); // Dynamic restore to allow retry attempts on failure tracks
        }
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };
    const formFocussedHandler = () => {
        setIsEntering(true);
    };

    const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
    const emailInputClasses = emailInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
    const phoneInputClasses = phoneInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
    const messageInputClasses = messageInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
    const formClasses = isSent ? `${classes.contactForm} ${classes.sent}` : classes.contactForm;

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);

    return (
        <Fragment>
            <Prompt when={isEntering} message={(location) =>
                'Are You Sure You Want To Leave ? All your entered data will be lost!'}
            />
            <div className={classes.contactFormCard}>
                <h1 style={{ color: nonThemeColor }}>Leave A Message</h1>
                <form onFocus={formFocussedHandler} action="" onSubmit={formSubmitHandler} className={formClasses}>
                    
                    <div className={classes.inputsFormGroupRow}>
                        <input value={enteredName}
                            onBlur={nameBlurHandler}
                            onChange={nameChangedHandler}
                            type="text"
                            className={nameInputClasses}
                            style={{ color: nonThemeColor }}
                            placeholder="First Name"
                            disabled={isSent}
                        />
                        <input type="text"
                            id="lName"
                            value={enteredLName}
                            onChange={lastNameChangeHandler}
                            className={classes.Inputs}
                            style={{ color: nonThemeColor }}
                            placeholder="Last Name (optional)"
                            disabled={isSent}
                        />
                    </div>

                    <div className={classes.inputsFormGroupRow}>
                        <input value={enteredEmail}
                            onBlur={emailBlurHandler}
                            onChange={emailChangedHandler}
                            type="email"
                            className={emailInputClasses}
                            style={{ color: nonThemeColor }}
                            placeholder="Email"
                            disabled={isSent}
                        />
                        <input value={enteredPhone}
                            onBlur={phoneBlurHandler}
                            onChange={phoneChangedHandler}
                            type="text"
                            className={phoneInputClasses}
                            style={{ color: nonThemeColor }}
                            placeholder="Phone"
                            minLength={10}
                            maxLength={12}
                            disabled={isSent}
                        />
                    </div>

                    <textarea
                        value={enteredMessage}
                        onBlur={messageBlurHandler}
                        onChange={messageChangedHandler}
                        className={messageInputClasses}
                        style={{ color: nonThemeColor }}
                        name="message"
                        placeholder="Message"
                        disabled={isSent}
                    ></textarea>
                    
                    <div className={classes.sendBtn}>
                        <Button 
                            type="submit" 
                            disabled={!formIsValid || isSent}
                            style={formIsValid && !isSent ? { background: `linear-gradient(135deg, ${uiColor} 0%, #a121c1 100%)`, color: '#ffffff' } : {}}
                        >
                            {btnText}
                        </Button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default ContactForm;
