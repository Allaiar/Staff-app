import axios from "axios";

const getUsers = async () => {
  const users = await axios.get("http://localhost:8000/users");

  return users.data;
};

const addUser = async (userData) => {
  const users = await axios.post('http://localhost:8000/users', userData)

  return users.data
}

const usersService = {
  getUsers, addUser
};

export default usersService;