import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',  
    border: '10px',
    padding: '20px 90px 20px 90px',
    marginTop: '20px 90px 20px 90px',
    '& > *': {
      margin: '20px',
      width: '100%',
      maxWidth: '600px',
    },
  },
  button: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '250px',
    backgroundColor: '#8b0000',
  },
}));

function ContactForm() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div style={{ textAlign: "center", fontWeight: 'bold' }}>
        <h1>Contact Us!</h1>
      </div>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        variant="outlined"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        variant="outlined"
        required
      />
      <TextField
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        variant="outlined"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
