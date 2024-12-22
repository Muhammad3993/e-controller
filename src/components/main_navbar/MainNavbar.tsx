import { NavLink, useLocation } from "react-router-dom";
import "./main_navbar.css";
import clsx from "clsx";

interface IProps {
  addBtnText?: string;
  isLinks?: boolean;
  addBtnFn?: () => void;
}

const MainNavbar = (props: IProps) => {
  const { addBtnText, isLinks, addBtnFn } = props;
  const location = useLocation();

  console.log(location);

  return (
    <div className='flex justify-between'>
      <div>
        {isLinks && (
          <div className='flex gap-[10px]'>
            <NavLink
              to={""}
              className={clsx(
                "h-[50px] px-[20px] border border-3582F6 flex items-center justify-center text-3582F6 rounded-[4px] main_nav_links",
                location.pathname === "/profile/avatars" && "removeBg",
              )}
            >
              Change Information
            </NavLink>
            <NavLink
              to={"avatars"}
              className={clsx(
                "h-[50px] px-[20px] border border-3582F6 flex items-center justify-center text-3582F6 rounded-[4px] main_nav_links",
              )}
            >
              Avatars
            </NavLink>
          </div>
        )}
      </div>
      <div
        className='w-[205px] h-[50px] main_layout_btn flex items-center justify-center rounded-[4px] text-white justify-self-end cursor-pointer'
        onClick={addBtnFn}
      >
        {addBtnText}
      </div>
    </div>
  );
};

export default MainNavbar;
