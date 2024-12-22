import { FaClipboardList, FaUsers } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdBusiness, MdOutlinePayments } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='w-[18.5%] h-[100vh] bg-main_bg py-[30px] px-[15px] sidebar'>
      <NavLink
        to={"/"}
        className='flex items-center gap-4 cursor-pointer h-[50px] sidebar_link px-[15px] rounded-[4px]'
      >
        <div className='text-[24px] text-white'>
          <MdBusiness />
        </div>
        <p className='text-white font-medium'>Companies</p>
      </NavLink>
      <NavLink
        to={"/owners"}
        className='flex items-center gap-4 cursor-pointer h-[50px] sidebar_link px-[15px] rounded-[4px]'
      >
        <div className='text-[24px] text-white'>
          <HiOutlineUserGroup />
        </div>
        <p className='text-white font-medium'>Owners</p>
      </NavLink>
      <NavLink
        to={"/payments"}
        className='flex items-center gap-4 cursor-pointer h-[50px] sidebar_link px-[15px] rounded-[4px]'
      >
        <div className='text-[24px] text-white'>
          <MdOutlinePayments />
        </div>
        <p className='text-white font-medium'>Payments</p>
      </NavLink>
      <NavLink
        to={"/users"}
        className='flex items-center gap-4 cursor-pointer h-[50px] sidebar_link px-[15px] rounded-[4px]'
      >
        <div className='text-[24px] text-white'>
          <FaUsers />
        </div>
        <p className='text-white font-medium'>Users</p>
      </NavLink>
      <NavLink
        to={"/applications"}
        className='flex items-center gap-4 cursor-pointer h-[50px] sidebar_link px-[15px] rounded-[4px]'
      >
        <div className='text-[24px] text-white'>
          <FaClipboardList />
        </div>
        <p className='text-white font-medium'>Applications</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
