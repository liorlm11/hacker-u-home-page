import React from 'react';

const ContactForm = () => {

    return (
        <div className="contact-form">
            <div className="contact-form__title">רוצים לשמוע עוד?</div>
            <form>
                <div className="input-container">
                    <label> שם מלא</label>
                    <span>|</span>
                    <input type="text"></input>
                </div>
                <div className="input-container">
                    <label> טלפון</label>
                    <span>|</span>
                    <input type="text"></input>
                </div>
                <div className="input-container">
                    <label> אימייל</label>
                    <span>|</span>
                    <input type="text"></input>
                </div>
                
                <div className="agreement">
                    <input type="checkbox" checked="checked" id="checkbox"></input>
                    <label for="checkbox">אני מאשר קבלת עדכונים ומבצעים מהאקריו בכפוף לתקנון.</label>
                </div>
                    
                <div className="privacy-policy">
                    <a href="123">מדיניות פרטיות משתמשים</a>
                </div>

                <button>
                    <div className="button-inside">דברו איתי!</div>
                </button>
            </form>
        </div>
    )
}

export default ContactForm;