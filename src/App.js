import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import UserItem from "./components/UserItem";
import { getUsers, selectUsers, addUser } from "./redux/users/userSlice";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [permissions, setPermissions] = useState([]);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const PermissionChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setPermissions([...permissions, value]);
    } else {
      setPermissions(permissions.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const AddUser = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      image: img,
      permissions: permissions,
    };
    dispatch(addUser(userData));
    setShowInputs(false);
    setName("");
    setEmail("");
    setPermissions("");
  };

  return (
    <div className="App border-2 border-bg-cyan-500 shadow-lg shadow-gray-500/50 max-w-7xl mx-auto mt-10 rounded-3xl pb-3">
      <div className="flex justify-between gap-x-10 mt-8 mb-5 border-b-2 pb-4 px-9">
        <h1 className="font-bold text-2xl text-gray-600">Команда</h1>
        {showInputs ? (
          <div className="">
            <div className="flex gap-x-10">
              <input
                className="border border-gray-300 rounded-md py-2 px-4 mb-2 h-10"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border border-gray-300 rounded-md py-2 px-4 mb-2 h-10"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border border-gray-300 rounded-md py-2 px-4 mb-4 h-10"
                type="text"
                placeholder="Image URL"
                value={users.img}
                onChange={(e) => setImg(e.target.value)}
              />
              <svg
                onClick={() => setShowInputs(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600 mt-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex gap-x-7 gap-y-2 flex-wrap">
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Модерация объявлений"
                  checked={permissions.includes("Модерация объявлений")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Модерация объявлений
              </label>
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Блог"
                  checked={permissions.includes("Блог")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Блог
              </label>
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Тех. поддержка"
                  checked={permissions.includes("Тех. поддержка")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Тех. поддержка
              </label>
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Обращения клиентов"
                  checked={permissions.includes("Обращения клиентов")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Обращения клиентов
              </label>
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Аналитика"
                  checked={permissions.includes("Аналитика")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Аналитика
              </label>
              <label className="text-xl font-medium text-gray-500">
                <input
                  type="checkbox"
                  value="Акции"
                  checked={permissions.includes("Акции")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Акции
              </label>
            </div>
          </div>
        ) : (
          <svg
            style={{ marginLeft: "760px" }}
            onClick={() => setShowInputs(true)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600 mt-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        )}
        <button
          disabled={!name || !email || !img}
          className="bg-green-500 text-white w-56 h-12 rounded-2xl hover:bg-green-600 font-bold"
          onClick={AddUser}
        >
          Добавить пользователя
        </button>
      </div>
      <div className="mx-auto px-3">
        {users.map((el) => (
          <UserItem key={el.id} user={el} {...el} />
        ))}
      </div>
    </div>
  );
}

export default App;
