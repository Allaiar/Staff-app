import React, { useState } from "react";
import { deleteUser, editUser } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(user.id);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState(user.image);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuToggle, setShowMenuToggle] = useState(true);
  const [permissions, setPermissions] = useState(user.permissions);
  const [ava] = useState(
    "https://cdn1.flamp.ru/07e1cd43a9e5be02947aa62e9bc48688.jpg"
  );

  const PermissionChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setPermissions([...permissions, value]);
    } else {
      setPermissions(permissions.filter((item) => item !== value));
    }
  };

  const Delete = () => {
    dispatch(deleteUser(user.id));
    toast.info("Обновите страницу");
  };

  const MenuToggle = (id) => {
    setShowMenu(id === showMenu ? null : id);
    setShowMenuToggle(false);
  };

  const MenuTimes = (id) => {
    setShowMenu(id === showMenu ? null : id);
    setShowMenuToggle(true);
  };

  const Edit = () => {
    if (editing) {
      const updatedUser = {
        id: user.id,
        name: name,
        email: email,
        image: img,
        permissions,
        permissions,
      };
      dispatch(editUser(updatedUser));
    }
    setEditing(!editing);
  };

  const Cancel = () => {
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
    setImg(user.image);
    setPermissions(user.permissions)
    setEditing(false);
  };

  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="flex">
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <div className="w-20 h-20 mr-4 ml-4">
          <div className="w-20 h-20 mr-4 ml-4">
            {!img ? (
              <img
                className="rounded-full w-full h-full object-cover"
                src={ava}
                alt="img"
              />
            ) : (
              <img
                className="rounded-full w-full h-full object-cover"
                src={img}
                alt="img"
              />
            )}
          </div>
        </div>
        {!editing ? (
          <div>
            <div className="flex gap-x-5">
              <h2 className="text-xl font-bold text-gray-600 ml-5">
                {user.name}
              </h2>
              <h3 className="text-gray-500 font-medium ml-2">{user.email}</h3>
            </div>
            <div className="ml-4 mt-2 flex gap-x-1">
              {user.permissions &&
                user.permissions.map((permission) => (
                  <div
                    className="border p-1 rounded-2xl text-gray-500 px-3 pb-1.5"
                    key={permission}
                  >
                    {permission}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="ml-4 flex">
              <label className="font-bold">
                Имя
                <input
                  type="text"
                  className="border-2 border-gray-500 focus:outline-none text-md font-bold text-gray-600 mr-2 p-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="font-bold">
                Email
                <input
                  type="text"
                  className="border-2 border-gray-500 focus:outline-none text-md font-bold text-gray-600 mr-2 p-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="font-bold">
                Ссылка на фотографию
                <input
                  type="text"
                  className="border-2 border-gray-500 focus:outline-none text-md font-bold text-gray-600 mr-2 p-1"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </label>
            </div>
            <div className="flex gap-x-3 gap-y-2 flex-wrap max-w-2xl mt-3 ml-4">
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
                  value="Акции"
                  checked={permissions.includes("Акции")}
                  onChange={PermissionChange}
                  className="h-5 w-5 mr-1"
                />
                Акции
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
            </div>
          </div>
        )}
      </div>
      {editing ? (
        <>
          {showMenu && (
            <div className="flex">
              <button
                className="ml-2 px-4 py-2 rounded bg-green-500 text-white"
                onClick={Edit}
              >
                Сохранить
              </button>
              <button
                className="ml-2 px-4 py-2 rounded bg-gray-500 text-white mr-6"
                onClick={Cancel}
              >
                Назад
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          {showMenu && (
            <>
              <button
                className="ml-4 px-4 py-2 rounded bg-red-500 text-white"
                onClick={Delete}
              >
                &times;
              </button>
              <button
                className="ml-2 px-4 py-2 rounded bg-blue-500 text-white mr-3"
                onClick={Edit}
              >
                Изменить
              </button>
            </>
          )}
          {showMenuToggle ? (
            <button
              className="mr-5 text-4xl mb-10"
              onClick={() => MenuToggle(id)}
            >
              ...
            </button>
          ) : (
            <button
              className="mr-4 text-4xl mb-7"
              onClick={() => MenuTimes(id)}
            >
              &times;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserItem;
