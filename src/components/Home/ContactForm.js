import { useState } from "react";
import ContactList from "./ContactList";
import "./ContactForm.css";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    dob: "",
    type: "",
    value: "",
    contacts: []
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value || ""
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: formState.name,
      surname: formState.surname,
      dob: formState.dob,
      type: formState.type,
      value: formState.value
    };

    setFormState({
      contacts: [...formState.contacts, newContact],
      name: "",
      surname: "",
      dob: "",
      type: "",
      value: ""
    });
  };

  const handleEdit = (index, event) => {
    event.preventDefault();
    const newContacts = [...formState.contacts] || "";
    newContacts[index] = {
      name: formState.name,
      surname: formState.surname,
      dob: formState.dob,
      type: formState.type,
      value: formState.value
    };
    setFormState({
      contacts: newContacts,
      name: "",
      surname: "",
      dob: "",
      type: "",
      value: ""
    });
  };

  const handleDelete = (index) => {
    const newContacts = [...formState.contacts];
    newContacts.splice(index, 1);
    setFormState({ contacts: newContacts });
  };

  return (
    <div className="contactFormContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formState.surname}
            maxLength={30}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            name="dob"
            type="date"
            value={formState.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Type:
          <select
            name="type"
            value={formState.type}
            onChange={handleChange}
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
            name="value"
            type="text"
            value={formState.value}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
      <ContactList
        contacts={formState.contacts}
        handleEdit={handleDelete}
        handleDelete={handleEdit}
      />
    </div>
  );
}
