import React from "react";
import ContactForm from "./ContactForm";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contactsContainer">
      <p>CONTACTS:</p>
      <ContactForm />
    </div>
  );
}
