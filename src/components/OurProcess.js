import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurProcess = () => {

    return (
        <div className="content-container our-process">
            <h4>התהליך שלנו</h4>
            <div className="cards-container">
                <ScrollAnimation 
                    animateIn="bounceInRight" 
                    animateOnce={true} 
                    duration="1" 
                    className="card card-1"
                >
                    <div className="card__number-container">
                        <div className="card__number"><span>1</span></div>
                    </div>
                    <div className="card_title">פגישת ייעוץ</div>
                    <div className="card_dividing-line"></div>
                    <p>בפגישה נערך ראיון אישי עם המועמד, אנו בודקים את הרקע שלו ואת יכולת ההשתלבות שלו בתעשייה</p>
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="bounceInRight" 
                    animateOnce={true} 
                    duration="1.5" 
                    className="card card-2"
                >
                    <div className="card__number-container">
                        <div className="card__number"><span>2</span></div>
                    </div>
                    <div className="card_title">קורס מיון</div>
                    <div className="card_dividing-line"></div>
                    <p>שלב זה אורך בין 40-20 שעות על מנת לבדוק את יכולות המועמד ללימודי המשך ולהשמה בעבודה. לא עברת את שלב המיון ? תקבל החזר כספי של שכר הלימוד ששילמת</p>
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="bounceInRight" 
                    animateOnce={true} 
                    duration="2" 
                    className="card card-3"
                >
                    <div className="card__number-container">
                        <div className="card__number"><span>3</span></div>
                    </div>
                    <div className="card_title">ללכת על בטוח</div>
                    <div className="card_dividing-line"></div>
                    <p>אחרי שעברת את שלב המיון בהצלחה ונשמת לרווחה, תקבל התחייבות חוזית לעבודה ומלגת לימודים עד 7,000 ₪ תלוי במסלול שבחרת</p>
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="bounceInRight" 
                    animateOnce={true} 
                    duration="2.5" 
                    className="card card-4"
                >
                    <div className="card__number-container">
                        <div className="card__number"><span>4</span></div>
                    </div>
                    <div className="card_title">מתחילים ללמוד</div>
                    <div className="card_dividing-line"></div>
                    <p>הלימודים אצלנו פרקטיים ומטרתם לשלב את הבוגרים שלנו בתעשייה, לצורך זה תוכנית הלימודים שלנו היא המקצועית והמקיפה ביותר ובזכותה אנחנו מספר אחת בהשמת בוגרים בהייטק</p>
                </ScrollAnimation>
            </div>
            
            <div className="button-container">
                <button>
                    <div className="button-inside">קביעת פגישת יעוץ</div>
                </button>
            </div>
            
        </div>
    )
}

export default OurProcess;