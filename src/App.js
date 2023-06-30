import { useDispatch, useSelector } from "react-redux";
import "./components/LeftBar";
import UserItem from "./components/UserItem";
import { getUsers, selectUsers, addUser } from "./redux/users/userSlice";
import { useEffect, useState, useCallback  } from "react";
import SideBar from "./components/LeftBar";

function App() {
  const [id, setId] = useState();
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

  const AddUser = useCallback(() => {
    const usersData = {
      id: id,
      name: name,
      email: email,
      image: img,
      permissions: permissions,
    };
    dispatch(addUser(usersData));
    setShowInputs(false);
  },[name, email, img, permissions, dispatch]);

  return (
    <div>
      <SideBar />
      <div className="app border-2 border-bg-cyan-500 shadow-lg shadow-gray-500/50 max-w-6xl mx-auto mt-10 rounded-3xl pb-3">
        <div className="flex justify-between gap-x-4 mt-8 mb-5 border-b-2 pb-8 px-9">
          <h1 className="font-bold text-3xl text-gray-600 mt-2">Команда</h1>
          {showInputs ? (
            <div className="mt-2 ml-4">
              <div className="flex gap-x-4">
                <input
                  className="border border-gray-300 rounded-md py-2 px-4 mb-2 h-10 text-md font-medium w-48"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border border-gray-300 rounded-md py-2 px-4 mb-2 h-10 text-md font-medium w-48"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border border-gray-300 rounded-md py-2 px-4 mb-4 h-10 text-md font-medium w-48"
                  type="text"
                  placeholder="Image URL"
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
              <div className="flex gap-x-3 gap-y-2 flex-wrap max-w-3xl">
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
              style={{ marginLeft: "560px" }}
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
            disabled={!name || !email}
            className="bg-green-500 text-white min-w-fit h-12 rounded-2xl hover:bg-green-600 font-bold px-6"
            onClick={AddUser}
          >
            Добавить пользователя
          </button>
        </div>
        <div className="mx-auto px-3">
          {users.length <= 0 ? (
            <h1 className="text-center font-bold text-4xl pb-10 pt-6 italic text-gray-400">
              Сотрудники отсутствуют!
            </h1>
          ) : (
           users && users.map((el) => <UserItem key={el.id} user={el} {...el} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
