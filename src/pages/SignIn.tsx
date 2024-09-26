// src/pages/SignIn.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { login as loginService } from '../services/api';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginService(email, password);
      dispatch(login(response.data));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-2 my-2 rounded-md" placeholder="Email" />
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 p-2 my-2 rounded-md" placeholder="Password" />
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
</form>
  );
};

export default SignIn;