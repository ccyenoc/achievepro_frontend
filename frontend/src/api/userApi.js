import { users } from "../data/userData";

const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

// 👤 Get all users
export const getUsers = async () => {
  await delay();
  return users;
};

// 👤 Get user by ID
export const getUserById = async (id) => {
  await delay();
  return users.find(user => user.id === id);
};

// 👤 Get user by email (for login routing)
export const getUserByEmail = async (email) => {
  await delay();
  return users.find(user => user.email === email);
};

// 👤 Get all staff
export const getStaff = async () => {
  await delay();
  return users.filter(user => user.role === "staff");
};

// 👤 Get all managers
export const getManagers = async () => {
  await delay();
  return users.filter(user => user.role === "manager");
};