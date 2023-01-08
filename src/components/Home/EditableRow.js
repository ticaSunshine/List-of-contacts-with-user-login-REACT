import React from "react";

export default function EditableRow() {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an surname ..."
          name="surname"
        />
      </td>
      <td>
        {" "}
        <input
          type="date"
          required="required"
          placeholder="Enter an surname ..."
          name="dob"
        />
      </td>
      <td>
        <select required="required" placeholder="Select" name="type">
          {" "}
          <option value="">--Select--</option>
          <option value="mobile">Mobile Phone</option>
          <option value="fixed">Fixed Telephone</option>
          <option value="email">Email</option>
          <option value="pager">Pager</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter contact ..."
          name="text"
        />
      </td>
    </tr>
  );
}
