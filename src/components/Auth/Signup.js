import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/slices/authSlice';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Signup</button>
      {authState.status === 'loading' && <p>Loading...</p>}
      {authState.error && <p>Error: {authState.error}</p>}
    </form>
  );
};

export default Signup;
