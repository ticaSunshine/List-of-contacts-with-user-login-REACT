import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <ContactForm></ContactForm>
      <ul>
        {contacts &&
          contacts.map((contact) => (
            <li key={contact.value}>
              {contact.name} {contact.surname} ({contact.type}: {contact.value})
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
