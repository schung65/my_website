import SendIcon from "@mui/icons-material/Send"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    e.preventDefault();

    // Check if any of the fields are empty
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email">
        <input className="small-input" type="text" name="from_name" id="name" placeholder="Name" />
        <input className="small-input" type="text" name="email_from" id="email" placeholder="example@gmail.com" />
        <textarea className="large-input" type="text" name="message" id="message" placeholder="Message" />
        <button>
            <p>Send</p>
            <SendIcon background-color="red" />
        </button>
    </form>
  );
};

export default EmailForm