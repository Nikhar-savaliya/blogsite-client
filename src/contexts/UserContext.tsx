import { getUserDataFromSession, storeInSession } from "@/helpers/session";
import { createContext, useEffect, useState } from "react";

export interface UserDataType {
  profileImg: string | undefined;
  username: string;
  fullname: string;
  accessToken: string;
}

export interface UserContextType {
  userData: UserDataType;
  updateUser: (data: UserDataType) => void;
}

export const UserContext = createContext<UserContextType>({
  userData: {
    profileImg: "",
    username: "",
    fullname: "",
    accessToken: "",
  },
  updateUser: () => {},
});

function UserContextProvider({ children }: any) {
  const [userData, setUserData] = useState<UserDataType>({
    profileImg: undefined,
    fullname: "",
    username: "",
    accessToken: "",
  });

  const updateUser = (data: any) => {
    setUserData({ ...userData, ...data });
  };

  useEffect(() => {
    let userInSession = getUserDataFromSession();
    if (userInSession) {
      updateUser(userInSession);
    } else {
      storeInSession(userData);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
