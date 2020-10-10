import React from 'react';
import {  } from 'react-bootstrap';

const Header = () => {
    
    return (
       <div className="header">
            <div className="header-container content-container d-flex justify-content-center justify-content-lg-between">
                <div className="parts-1-and-2-container row">
                    <div className="part-1 ">
                        <a rel="stylesheet" href="#1">כניסת סטודנטים</a>
                        <div className="space"></div>
                        <a rel="stylesheet" href="#1">בלוג</a>
                        <div className="space"></div>
                        <a rel="stylesheet" href="#1">הטבות סטודנטים</a>
                        <div className="space d-none d-lg-inline"></div>
                    </div>
                    <div className="part-2 d-none d-lg-flex">
                        <a rel="stylesheet" href="#1"><span>ייעוץ לימודים. 03-7207027</span></a>
                        <div className="space"></div>
                        <a rel="stylesheet" href="#1"><span>שירות לסטודנטים. 03-613-5565</span></a>
                    </div>
                </div>
                <div className="search d-none d-lg-block">
                    <form >
                        <input type="text" placeholder="חיפוש"/>
                        <div className="space"></div>
                        <button>
                            <img src="https://www.hackeru.co.il/assets/site/images/search.png" alt="icon"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;