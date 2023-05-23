import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e2gt4aq', 'template_2q2c48m', form.current, '4envBK_qXc-q4AvMW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className='page'>
        <h1 className='heading-contact'>CONTACTO</h1></div>
      <div className='content-form'>
        <form ref={form} onSubmit={sendEmail}>
          <label className='form-label'>Name</label>
          <input className='form-email' type="text" name="user_name" placeholder='Juan Perez' />
          <label className='form-label'>Email</label>
          <input className='form-email' type="email" name="user_email" placeholder='juan@perez2020.com' />
          <label className='form-label'>Message</label>
          <textarea className='form-email' name="message" placeholder='Buenos días, lo contactamos debido...' />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};