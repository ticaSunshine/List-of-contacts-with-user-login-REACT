import React, { useState } from "react";

const ContactForm = (props) => {
  // Initialize an empty array for the list of contacts
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new contact to the list of contacts
    setContacts([
      ...contacts,
      {
        name: name,
        surname: surname,
        dob: dob,
        type: type,
        value: value
      }
    ]);
    props.onStateChange(contacts);
    // Clear the form fields
    setName("");
    setSurname("");
    setDob("");
    setType("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          maxLength={20}
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          maxLength={30}
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Contact Type:
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="mobile">Mobile Phone</option>
          <option value="fixed">Fixed Telephone</option>
          <option value="email">Email</option>
          <option value="pager">Pager</option>
        </select>
      </label>
      <br />
      <label>
        Contact:
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
