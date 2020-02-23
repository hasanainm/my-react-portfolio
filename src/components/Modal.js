import React from 'react';
import "../css/style.css";


const Modal = () => {
  return (
    <div className="contact-modal">
      <div className="contact-model-form container valign-wrapper">
        <div className="inside-modal-form">
          <div className="contact-model-close">
            <i className="fas fa-times"></i>
          </div>
          <br />
          <div className="row center-align">
            <div className="contact-model-subheader u-margin-top-small"> If you have any questions or comments, please feel free to reach out!</div>
          </div>
          <div className="row">
            <form action="#" id="contact-form" className="form">

              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full name" required />
                <label htmlFor="name" className="form__label">Full name</label>
              </div>

              <br />

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email address" required />
                <label htmlFor="email" className="form__label">Email address</label>
              </div>

              <br />

              <div className="form__group">
                <input type="text" className="form__input" placeholder="Subject" required />
                <label htmlFor="subject" className="form__label">Subject</label>
              </div>

              <br />

              <div className="form__group">
                <input type="textarea" className="form__input" placeholder="Message" required />
                <label htmlFor="message" className="form__label">Message</label>
              </div>


              <button className="submit-email">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal;
