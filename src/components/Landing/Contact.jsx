import React, { useState } from 'react';
import { Person, Email, Message } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

import sendMail from '../../mailer/mailer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(true);

  function sendMailCallback(mailSuccess) {
    setSuccess(mailSuccess);
    setAlert(true)
    setTimeout(() => setAlert(false), 5000);
  }

  return(
    <section className="section-c" id="section-c">
      <div className="container">
        <Alert
          className="message-alert"
          severity={success ? 'success' : 'error'}
          onClose={() => setAlert(false)}
          style={{ display: alert ? 'flex' : 'none' }}
        >
          {success ? 'Message Sent!' : 'Error sending mail'}
        </Alert>

        <h1 className="section-title">Let's Talk!</h1>

        <div className="contact-form">
          <div className="double-input">
            <div className="field">
              <div className="form-label">
                <Person />
                <p>NAME</p>
              </div>
              <input id="name" type="text" className="form-input"
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field" id="mail">
              <div className="form-label">
                <Email />
                <p>EMAIL</p>
              </div>
              <input id="email" type="email" className="form-input"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="field">
            <div className="form-label">
              <Message />
              <p>MESSAGE</p>
            </div>
            <textarea id="message" cols="30" rows="10" className="form-input"
              value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className="submit">
            <button type="button" onClick={() => sendMail(name, email, message, sendMailCallback)} className="main-button">
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;