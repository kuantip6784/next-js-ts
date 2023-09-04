import { createContext, useContext, useState } from "react";
import { contextProviderProps } from "../interfaces/typeChildren.interface";

type userContext = {
  user: any;
  setUser: any;
};

interface IUser {
  userName: string;
  lastName: string;
}

export const AppContext = createContext({} as userContext);

export const UserContextProvider = ({ children }: contextProviderProps) => {
  const [user, setUser] = useState<IUser>();
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
