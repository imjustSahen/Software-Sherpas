import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <h3>{props.name}</h3>
      <p>{props.Github}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;