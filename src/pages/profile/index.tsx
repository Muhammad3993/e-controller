import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/main_navbar/MainNavbar";
import { useUserAvatar } from "../../context/UserAvatarContext";

const Profile = () => {
  const { updateUserAvatar } = useUserAvatar();
  return (
    <div>
      <MainNavbar
        addBtnText='Save Changes'
        isLinks
        addBtnFn={() => updateUserAvatar()}
      />
      <Outlet />
    </div>
  );
};

export default Profile;
