import React from 'react';
import { FaHome, FaUsers, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { NavElement } from './sidebarNavElement';
import { useRouter } from 'next/router';


// moving logout function here for the sake of keeping layout file cleaner,
// and because it's not really reused so it can sit here anyway

const menuOptions = [
  { title: "Overview", icon: <FaHome className='h-7 w-7' />, path: "/" },
  { title: "Members", icon: <FaUsers className='h-7 w-7' />, path: "/dashboard/members" }
];
const Sidebar = () =>
{
  const router = useRouter();

  return (
    <div id="sidebar" className="min-h-full w-56 bg-sidebarBG flex justify-between flex-col">
      <div className="flex items-center justify-center h-19 bg-sidebarBG px-4">
        <img src="images/CougarCS-logo.png" alt="Logo" className="h-10" />
        <div>
          <span className="text-lg font-bold text-white">CougarCS</span>
        </div>
        <div>
          <span className="text-sm font-light text-white">Admin Portal</span>
        </div>

      </div>
      <div id="sidebar-content" className="sticky top-0 items-center">
        {menuOptions.map((item) =>
        {
          return (
            <NavElement onClick={() => router.push(item.path)} active={router.pathname === item.path}>
              {item.icon}
              {item.title}
            </NavElement>
          );
        })}



      </div>
      <div className="flex flex-col justify-end mt-auto">
        <button onClick={() => { }} className="bg-red-500 text-white px-4 py-2 text-sm uppercase mt-3 mx-3 rounded-full hover:bg-red-600">Logout</button>
      </div>
    </div >
  );
};

export default Sidebar;
