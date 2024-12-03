import { createContext, useState } from "react";

export type UserRoleContextType = {
  userSelectedRole: string;
  setUserSelectedRole: React.Dispatch<React.SetStateAction<string>>;
};

export const UserRoleContext = createContext<UserRoleContextType>({
  userSelectedRole: "",
  setUserSelectedRole: () => {},
});

export const UserRoleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userSelectedRole, setUserSelectedRole] = useState<string>("");

  return (
    <UserRoleContext.Provider
      value={{
        userSelectedRole,
        setUserSelectedRole,
      }}
    >
      {children}
    </UserRoleContext.Provider>
  );
};
