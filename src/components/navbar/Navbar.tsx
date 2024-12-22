import Logo from "../../assets/images/logo";
import LocationSelector from "../location_selector/LocationSelector";
import { Link } from "react-router-dom";
import Notification from "../../assets/icons/notification";
import Logout from "../../assets/icons/logout";
import { useUserAvatar } from "../../context/UserAvatarContext";

const Navbar = () => {
  const { userAvatar } = useUserAvatar();
  return (
    <nav className='w-full h-[72px] bg-main_bg flex items-center justify-between px-[30px] border-b border-FFFFFF_10'>
      <div className='flex items-center gap-[30px]'>
        <Link to={"/"}>
          <Logo />
        </Link>
        <div>
          <LocationSelector />
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <Link
          to={"/profile"}
          className='cursor-pointer flex items-center justify-between gap-3'
        >
          <div className='w-[44px] h-[44px] rounded-full overflow-hidden'>
            <img src={userAvatar || ""} alt='' />
          </div>
          <p className='font-normal text-sm text-white'>Full Name</p>
          <div className='bg-70D584 px-[6px] text-xs text-black font-normal rounded-[4px]'>
            <p>Manager</p>
          </div>
        </Link>
        <div className='bg-D9D9D9 w-[1px] h-[44px]' />
        <div className='flex gap-6'>
          <Link to={"/"}>
            <Notification />
          </Link>
          <Link to={"/"}>
            <Logout />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
