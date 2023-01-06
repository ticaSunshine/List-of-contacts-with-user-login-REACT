import React from "react";

export default function ContactList({ contacts, handleDelete, handleEdit }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Suername</th>
            <th>Date of Birth</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => (
              <tr key={contact.value}>
                <th>{contact.name}</th>
                <th>{contact.suername}</th>
                <th>{contact.dob}</th>
                <th>
                  {contact.type}: {contact.value}
                </th>
                <th>
                  <button onClick={(event) => handleEdit(index, event)}>
                    Edit
                  </button>
                </th>
                <th>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

/* const ContactList = (props) => {
  let contacts = [...props.contacts];
  return (
    <>
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

export default ContactList; */
