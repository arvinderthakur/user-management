import React from 'react';
import { Link } from 'react-router-dom';
import './UserDetail.css';

const UserDetail = ({ user, onEdit }) => {
  if (!user) return null;

  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <div className="btn-group">
        <Link to="/">Back to List</Link>
        <button onClick={() => onEdit(user.id)}>Edit</button>
      </div>
    </div>
  );
};

export default UserDetail;
