import React from 'react';
import ContactForm from './ContactForm';
import GlobalAndBusiness from './GlobalAndBusiness';
import ScrollAnimation from 'react-animate-on-scroll';

const Courses = () => {

    return (
        <div className="courses">
            <div className="content-container">
                <h3 className="courses-header">הקורסים שלנו עכשיו גם אונליין</h3>
                <div className="courses-list-and-details-box">
                    
                    <div className="courses-container">
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1" className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.35.16-cyber.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס סייבר ואבטחת מידע Ethical Hacking</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.34.59-network-management.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס ניהול רשתות, אבטחת מידע ומחשוב ענן</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.41.07-marketing.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס שיווק דיגיטלי - קורס קידום אתרים, רשתות חברתיות, פרסום ומכירות באינטרנט</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.32.31-qa.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס QA בודק תוכנה</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.34.31-graphic-design.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס עיצוב גרפי עם התמחות ב-UI/UX</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.35.50-web-dev.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס בניית אתרים - Full Stack Development</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.38.36-apps.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס פיתוח אפליקציות ל-Android ול-iPhoneg</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.33.47-linux.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס ניהול שרתי לינוקס (Linux)</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.36.06-animation.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס אנימציה תלת מימדית תוכנת מאיה עם התמחות ב-ZBrush</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.37.06-gaming.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס פיתוח משחקים Gaming & VR</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="co">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.37.24-dba.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס DBA Master</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.33.06-net.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס תכנות NET.</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                        <a href="1" className="">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration="1"  className="course-container">
                                <img className="course-icon" src="https://www.hackeru.co.il/assets/site/images/19.12.15.15.36.41-automation.svg" alt="icon"/>
                                <div className="course-seperator "></div>
                                <div className="course-name">קורס מפתחי אוטומציה ל-QA</div>
                                <div className="icon2"></div>
                            </ScrollAnimation>
                        </a>
                    </div>
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                    
                </div>
                <GlobalAndBusiness />
            </div>
        </div>
    )
}

export default Courses;