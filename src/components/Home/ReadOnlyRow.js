import React from "react";

export default function ReadOnlyRow({ contact }) {
  return (
    <tr>
      <th>{contact.name}</th>
      <th>{contact.surname}</th>
      <th>{contact.dob}</th>
      <th>
        {contact.type}: {contact.value}
      </th>
    </tr>
  );
}
