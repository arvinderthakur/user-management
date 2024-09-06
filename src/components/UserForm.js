import React, { useState, useEffect } from 'react';

const UserForm = ({ user = {}, onSubmit, setUsers }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone };
    if (onSubmit) {
      onSubmit(newUser);
    } else {
      // Creating a new user
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      .then(response => response.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data]);
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch(() => alert('Failed to create user'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
