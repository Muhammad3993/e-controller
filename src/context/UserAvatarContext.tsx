import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import avatar from "../assets/images/avatars/avatar.png";

interface UserAvatarContextType {
  userAvatar: string | null;
  userAvatarMain: string;
  updateUserAvatar: () => void;
  setUserAvatarMain: Dispatch<SetStateAction<string>>;
}

const UserAvatarContext = createContext<UserAvatarContextType | undefined>(
  undefined,
);

function UserAvatarProvider({ children }: PropsWithChildren<{}>) {
  const [userAvatar, setUserAvatar] = useState<string | null>(avatar);
  useEffect(() => {
    const avatarUser = localStorage.getItem("userAvatar");
    setUserAvatar(avatarUser);
  }, []);

  const [userAvatarMain, setUserAvatarMain] = useState("");

  const updateUserAvatar = () => {
    try {
      localStorage.setItem("userAvatar", userAvatarMain);
      setUserAvatar(userAvatarMain);
    } catch (error) {
      console.error("Error saving avatar to localStorage:", error);
      alert("Failed to save avatar. Please try again.");
    }
  };

  const contextValue: UserAvatarContextType = {
    userAvatar,
    userAvatarMain,
    updateUserAvatar,
    setUserAvatarMain,
  };

  return (
    <UserAvatarContext.Provider value={contextValue}>
      {children}
    </UserAvatarContext.Provider>
  );
}

const useUserAvatar = (): UserAvatarContextType => {
  const context = useContext(UserAvatarContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export { UserAvatarProvider, UserAvatarContext, useUserAvatar };
