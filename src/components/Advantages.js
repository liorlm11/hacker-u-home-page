import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Advantages = () => {

    return (
        <div className="advantages">
            <div className="content-container">
                <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    > 
                    <h3>היתרונות ללומדים בהאקריו</h3>
                </ScrollAnimation>
                <div className="advantages-container">
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_1.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">שיטת מיון ייחודית</div>
                            <p>שיטת מיון ייחודית לזיהוי והתאמת כישוריך בתחומי ההייטק הכוללת התנסות מעשית ללא סיכון כספי</p>
                            <a href="123">שיטת המיון</a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_6.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">ללמוד מהבית מקצוע Online</div>
                            <p>קורסים אונליין הישר בשידור LIVE למחשב שלכם בבית. אותם מסלולי הלימוד והתכנים עם הטכנולוגיה האיכותית והטובה ביותר.</p>
                            
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="advantages-container">
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_3.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">סגל מרצים מנצח</div>
                            <p>סגל הוראה המתמחה במקצועות ההייטק המבוקשים בניהם מנהלים בכירים בחברות הייטק, יזמים ועצמאיים בעלי חברות וניסיון מעשי רב שנים. אחרת איך תלמדו את הפרקטיקה הנדרשת בשוק העבודה?</p>
                            <a href="123">מיהם המרצים</a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_4.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">מלגת לימודים והתחייבות חוזית לעבודה</div>
                            <p>מאות מעסיקים, מנכל"ים, סמנכל"ים ומנהלות משאבי אנוש מהחברות הגדולות בשוק שעובדים איתנו כדי למצוא לכם עבודה בסיום הלימודים! סטודנט שעבר בהצלחה את שלב המיון יקבל התחייבות חוזית לעבודה ומלגת לימודים עד ₪7,000 גובה המלגה תלוי במסלול ההכשרה שבחרת</p>
                            <a href="123">מי מעסיק את הבוגרים שלנו?</a>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="advantages-container">
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_5.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">תוכנית לימודים מקיפה</div>
                            <p>הקורסים המקיפים והפרקטיים ביותר מבחינת כמות שעות ותכנים המותאמים לשוק העבודה</p>
                            <a href="123">מה לומדים</a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_6.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">מיקום מרכזי</div>
                            <p>קל להגיע וקל לחזור, ארבעה סניפים בערים מרכזיות רמת גן, ירושלים, באר שבע וחיפה, רק 5 דקות מתחנת הרכבת</p>
                            <a href="123">איפה אנחנו יושבים</a>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="advantages-container">
                    <ScrollAnimation 
                    animateIn="fadeInUp" 
                    animateOnce={true} 
                    duration="1" 
                    className="advantages__item"
                    >
                        <div className="advantage-image">
                            <img src="https://www.hackeru.co.il/assets/site/images/advs_7.svg" alt="icon"/>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-title">פריסה עולמית</div>
                            <p>שיתופי פעולה עם אוניברסיטאות מובילות ברחבי ארה"ב, הודו ואירופה</p>
                            
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Advantages;