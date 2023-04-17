import React, { useState } from "react";
import Typography from '@mui/material/Typography';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form style={{ backgroundColor: '#1f1f1f', display: 'block', color: '#fff', padding: '1rem', borderRadius: '0.5rem',}} 
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <Typography variant="h2" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '16px',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#ffffff',}}>
            Contact Us
        </Typography>
      <div>
        <input style={{ 
          backgroundColor: '#3d3d3d', 
          color: '#ffff', 
          border: 'none', 
          padding: '0.5rem', 
          borderRadius: '0.25rem', 
          width: '95%', 
          marginBottom: '1rem'}} 
          type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input style={{ 
          backgroundColor: '#3d3d3d', 
          color: '#fff', border: 'none', 
          padding: '0.5rem', 
          borderRadius: '0.25rem', 
          width: '95%', 
          marginBottom: '1rem'}} 
          type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea style={{ 
          backgroundColor: '#3d3d3d', 
          color: '#fff', 
          border: 'none', 
          padding: '0.5rem', 
          borderRadius: '0.25rem', 
          width: '95%', 
          marginBottom: '1rem'}} 
          placeholder="Your message" name="message" required />
      </div>
      <div>
        <button style={{ 
          backgroundColor: '#1a1a1a', 
          color: '#fff', 
          border: 'none', 
          padding: '0.5rem', 
          borderRadius: '0.25rem', 
          cursor: 'pointer',}} 
          type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;