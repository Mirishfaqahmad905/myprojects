import React, { useState } from 'react';
import './list.css';

const Contactlist = () => {
  const [Contacts, setContacts] = useState([]);
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  
  const FormHandler = (e) => {
    e.preventDefault();
    const newcontact = {
      id: Contacts.length + 1,
      phone: phone,
      name: name,
      email: email,
    };
    setContacts([...Contacts, newcontact]);
    setname('');
    setemail('');
    setphone('');
  };

  const handleDelete = (id) => {
    setContacts(Contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className='form-list'>
        <form onSubmit={FormHandler}>
          <label>
            Name:
            <input type='text' name='name' value={name} onChange={(e) => setname(e.target.value)} />
          </label>
          <label>
            Email:
            <input type='email' name='email' value={email} onChange={(e) => setemail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type='phone' name='phone' value={phone} onChange={(e) => setphone(e.target.value)} />
          </label>
          <button type='submit'>Add Contact </button>
        </form>
        <ul className='ul-list'>
          {Contacts.map((contact, index) => (
            <li key={contact.id}>
              <h2>
                {index} : {contact.name}
              </h2>
              <h2>{contact.phone}</h2>
              <h2>{contact.email}</h2>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contactlist;
