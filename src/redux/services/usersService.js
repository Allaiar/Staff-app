import axios from "axios";

const getUsers = async () => {
  const users = await axios.get("http://localhost:8000/users");

  return users.data;
};

const addUser = async (userData) => {
  const users = await axios.post('http://localhost:8000/users', userData)

  return users.data
}

const deleteUser = async (userId) => {
  const response = await axios.delete(`http://localhost:8000/users/${userId}`);
  return response.data;
};

const editUser = async (userData) => {
  const response = await axios.put(`http://localhost:8000/users/${userData.id}`, userData);
  return response.data;
};

const usersService = {
  getUsers, addUser, deleteUser,editUser
};

export default usersService;