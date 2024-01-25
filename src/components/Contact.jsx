// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'100vw', height:'80vh', justifyContent:'center'}}>
      <h2 className='text-center'>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
