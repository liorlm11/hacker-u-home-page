import React from 'react';

const GlobalAndBusiness = () => {

    return (
        <div className="content-container global-and-business">
            <div className="card">
                <div className="image-container">
                    <img src="https://www.hackeru.co.il/assets/site/images/global.svg" alt="icon"/>
                </div>
                <div>
                    <h3>HackerU העולמית</h3>
                    <p>ל- HackerU פריסה עולמית הכוללת שיתופי פעולה עם אוניברסיטאות מובילות בארה"ב, הודו ואירופה. במסגרת שיתוף הפעולה HackerU מציעה מסלולי לימוד שונים כדוגמת: סייבר ואבטחת מידע, שיווק דיגיטלי, UI\UX ועוד</p>
                    <a href="123">קרא עוד ←</a>
                </div>
            </div>
            <div className="card">
                <div className="image-container">
                    <img src="https://www.hackeru.co.il/assets/site/images/buildings.svg" alt="icon"/>
                </div>
                <div>
                    <h3>HackerU לעסקים</h3>
                    <p>HackerU-Pro החטיבה העסקית של HackerU מתמחה בהכשרה מקצועית בתחומי ההייטק והעיצוב השונים. מתן ייעוץ מקצועי לעסקים וגופים ממשלתיים בנושאים טכנולוגיים מגוונים</p>
                    <a href="123">קרא עוד ←</a>
                </div>
            </div>
        </div>
    )
}

export default GlobalAndBusiness;