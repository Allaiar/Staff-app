import React, { useState } from "react";
import { deleteUser, editUser } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState(user.image);
  const [showMenu, setMenu] = useState(false);

  const Delete = () => {
    dispatch(deleteUser(user.email));
  };

  const MenuToggle = (name) => {
    setMenu(name === showMenu ? null : name);
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
          <img
            className="rounded-full w-full h-full object-cover"
            src={img}
            alt=""
          />
        </div>
        {!editing ? (
          <div>
            <div className="flex gap-x-5">
              <h2 className="text-xl font-bold text-gray-600">{user.name}</h2>
              <h3 className="text-gray-500 font-medium">{user.email}</h3>
            </div>
            <div className="ml-auto flex gap-x-1">
            {
                  user.permissions.map(permission => <div key={permission.id} className='border p-1 rounded-2xl text-gray-500 px-3 pb-1.5'>{permission}</div>)
                }
            </div>
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="border-b-2 border-gray-500 focus:outline-none mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="border-b-2 border-gray-500 focus:outline-none mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border-b-2 border-gray-500 focus:outline-none mb-2"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        )}
      </div>
      {editing ? (
  <>
    {showMenu === name && (
      <div>
        <button className="ml-4 px-4 py-2 rounded bg-green-500 text-white" onClick={Edit}>
          Save
        </button>
        <button className="ml-2 px-4 py-2 rounded bg-gray-500 text-white mr-6" onClick={Cancel}>
          Cancel
        </button>
      </div>
    )}
  </>
) : (
  <div>
    <button className="mr-5 text-4xl" onClick={() => MenuToggle(name)}>
      ...
    </button>
    {showMenu === name && (
      <>
        <button className="ml-4 px-4 py-2 rounded bg-red-500 text-white" onClick={Delete}>
          &times;
        </button>
        <button className="ml-2 px-4 py-2 rounded bg-blue-500 text-white mr-6" onClick={Edit}>
          Edit
        </button>
      </>
    )}
  </div>
)}

    </div>
  );
};

export default UserItem;
