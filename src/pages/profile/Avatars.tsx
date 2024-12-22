import clsx from "clsx";
import img from "../../assets/images/avatars/avatar.png";
import img1 from "../../assets/images/avatars/avatar1.png";
import img2 from "../../assets/images/avatars/avatar2.png";
import img3 from "../../assets/images/avatars/avatar3.png";
import { useUserAvatar } from "../../context/UserAvatarContext";

const Avatars = () => {
  const { setUserAvatarMain, userAvatar, userAvatarMain } = useUserAvatar();
  const data = [
    { id: 1, img: img },
    { id: 2, img: img1 },
    { id: 3, img: img2 },
    { id: 4, img: img3 },
  ];
  return (
    <div className='flex flex-wrap gap-[20px] mt-[30px]'>
      {data.map((avatar) => (
        <div
          className={clsx(
            "w-max gap-[15px] flex items-center justify-center flex-col bg-FFFFFF_5 p-[10px] cursor-pointer rounded-lg border-2 border-transparent",
            userAvatarMain === avatar.img && "border-white",
            userAvatar === avatar.img && "border-red-400",
          )}
          key={avatar.id}
          onClick={() => setUserAvatarMain(avatar.img)}
        >
          <div className='w-full h-[150px] rounded-[4px] overflow-hidden'>
            <img
              src={avatar.img}
              alt=''
              className='object-contain w-full h-full'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatars;
