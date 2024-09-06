import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user details');
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = (updatedUser) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then(() => {
        setUser(updatedUser);
        navigate('/');
      })
      .catch(() => setError('Failed to update user'));
  };

  return (
    <div>
      <h1>Edit User</h1>
      {error && <p>{error}</p>}
      {user && <UserForm user={user} onSubmit={handleUpdate} />}
    </div>
  );
};

export default UserDetailPage;
