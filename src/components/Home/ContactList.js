import React from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import "./ContactList.css";

export default function ContactList({ contacts }) {
  return (
    <form>
      <table className="contactHeader">
        <thead className="contactListHeader">
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>DATE OF BIRTH</th>
            <th>CONTACT</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => (
              <ReadOnlyRow key={contact.value} contact={contact} />
            ))}
        </tbody>
      </table>
    </form>
  );
}
