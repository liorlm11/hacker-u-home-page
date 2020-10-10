import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const OpeningModal = () => {

    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

    return (
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className="modal-title-1">
                    עברנו ללמוד אונליין!
                </div>
                <div className="modal-title-2">
                    ללמוד הייטק ודיגיטל LIVE בזמן שנוח לך
                </div>
                <div className="modal-title-3">
                    רוצה לשמוע עוד?
                </div>
                <form>
                    <div className="modal-input-container">
                        <input type="text" placeholder="שם מלא"></input>
                    </div>
                    <div className="modal-input-container">
                      <input type="text" placeholder="טלפון"></input>
                    </div>
                    <div className="modal-input-container">
                        <input type="text" placeholder="אימייל"></input>
                    </div>
                    
                    <div className="checkbox-container">
                        <input type="checkbox" checked="checked" id="checkbox"></input>
                        <label for="checkbox">אני מאשר קבלת עדכונים ומבצעים מהאקריו</label>
                    </div>
                    <button className="modal-button">
                      לשיחת ייעוץ
                    </button>
                </form>
            </Modal.Body>
          </Modal>
        </div>
    )
}

export default OpeningModal;

