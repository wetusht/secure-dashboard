import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { logout } from '../features/auth/authSlice';
import { AnyAction } from 'redux';

const authMiddleware: Middleware<{}, RootState> = store => next => action => {
  if ((action as AnyAction).type === 'auth/logout') {
    // Perform any additional logout logic here
  }
  return next(action);
};

export default authMiddleware;