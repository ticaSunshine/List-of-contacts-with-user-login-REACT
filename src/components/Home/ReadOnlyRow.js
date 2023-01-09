import React from "react";
import "./ReadOnlyRow.css";

export default function ReadOnlyRow({ contact }) {
  return (
    <tr className="readOnlyCont" key={contact.value}>
      <th>{contact.name}</th>
      <th>{contact.surname}</th>
      <th>{contact.dob}</th>
      <th>
        {contact.type}: {contact.value}
      </th>
    </tr>
  );
}
