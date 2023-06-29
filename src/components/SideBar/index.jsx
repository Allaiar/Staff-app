import React, { useState } from "react";
import  logo  from "../../assets/icons/logo.svg";
import "./style.css";
import "../../style.css"

const SideBar = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`leftbar ${SidebarOpen && "leftbar-open"}`}>
      <div className="h-60 flex justify-center items-center relative cursor-pointer">
        <img
          className="h-10 w-auto"
          src={logo}
          alt="logo"
          onClick={() => setSidebarOpen(!SidebarOpen)}
        />
      </div>
      <ul className="">
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:pl-1">
            <span className="links ml-2 hover:text-gray-800">Аналитика</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Аналитика</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Профиль</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Профиль</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors duration-200 justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Модерация</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Модерация</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Баннер</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Баннер</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Команда</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Команда</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Блог</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Блог</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Курс валют</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Курс валют</span>
        </li>
        <li className="relative w-full mb-6">
          <a href="#" className="flex items-center text-gray-600 text-sm font-semibold transition-colors justify-start hover:text-gray-800 hover:pl-1">
            <span className="links hover:text-gray-800 ml-2">Выйти</span>
          </a>
          <span className="hidden absolute bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded left-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap">Выйти</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
