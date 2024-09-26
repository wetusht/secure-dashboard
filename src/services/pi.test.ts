import { login, register, fetchUsers } from './api';

test('login service', async () => {
  const response = await login('eve.holt@reqres.in', 'cityslicka');
  expect(response.data).toHaveProperty('token');
});

test('register service', async () => {
  const response = await register('eve.holt@reqres.in', 'pistol');
  expect(response.data).toHaveProperty('token');
});

test('fetch users service', async () => {
  const response = await fetchUsers();
  expect(response.data).toHaveProperty('data');
});