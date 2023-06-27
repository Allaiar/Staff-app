import React, { useState } from "react";
import { deleteUser, editUser } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState(user.image);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuToggle, setShowMenuToggle] = useState(true);
  const [ava] = useState(
    "https://cdn1.flamp.ru/07e1cd43a9e5be02947aa62e9bc48688.jpg"
  );

  const Delete = () => {
    dispatch(deleteUser(user.email));
  };

  const MenuToggle = (name) => {
    setShowMenu(name === showMenu ? null : name);
    setShowMenuToggle(false);
  };

  const MenuTimes = (name) => {
    setShowMenu(name === showMenu ? null : name);
    setShowMenuToggle(true);
  };

  const Edit = () => {
    if (editing) {
      const updatedUser = {
        id: user.id,
        name: name,
        email: email,
        image: img,
      };
      dispatch(editUser(updatedUser));
    }
    setEditing(!editing);
  };

  const Cancel = () => {
    setName(user.name);
    setEmail(user.email);
    setImg(user.image);
    setEditing(false);
  };

  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="flex">
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
              onClick={() => MenuToggle(name)}
            >
              ...
            </button>
          ) : (
            <button
              className="mr-4 text-4xl mb-7"
              onClick={() => MenuTimes(name)}
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
