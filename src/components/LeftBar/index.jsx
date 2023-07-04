import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "../../style.css";

const LeftBar = () => {
  const [LeftbarOpen, setLeftbarOpen] = useState(false);

  return (
    <div className={`leftbar ${LeftbarOpen && "leftbar-open"}`}>
      <div className="h-60 flex justify-center items-center relative cursor-pointer">
        <img
          className="h-10 w-auto"
          src={logo}
          alt="logo"
          onClick={() => setLeftbarOpen(!LeftbarOpen)}
        />
      </div>
      <ul>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:pl-1"
          >
            <span className="links ml-2 hover:text-gray-800">Аналитика</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Аналитика
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Профиль</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Профиль
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold duration-200 justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Модерация</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Модерация
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Баннер</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Баннер
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Команда</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Команда
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Блог</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Блог
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Курс валют</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Курс валют
          </span>
        </li>
        <li className="relative w-full mb-6">
          <a
            href="#"
            className="flex items-center text-gray-600 text-sm font-semibold justify-start hover:text-gray-800 hover:pl-1"
          >
            <span className="links hover:text-gray-800 ml-2">Выйти</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded ml-10 whitespace-nowrap">
            Выйти
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
