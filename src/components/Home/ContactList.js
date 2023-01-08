import React, { Fragment } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

export default function ContactList({ contacts }) {
  return (
    <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => (
              <Fragment>
                <ReadOnlyRow key={contact.value} contact={contact} />
                <EditableRow />
              </Fragment>
            ))}
        </tbody>
      </table>
    </form>
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
/* <tr>
                <th>
                  <button onClick={(event) => handleEdit(index, event)}>
                    Edit
                  </button>
                </th>
                <th>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </th>
                </tr> */
