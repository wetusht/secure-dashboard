
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
    </div>
  );
};

export default Dashboard;
