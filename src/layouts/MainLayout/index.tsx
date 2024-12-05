import * as _ from "./styles";
import Header from "@components/UI/Header";
import Sidebar from "@components/UI/Sidebar";
import { SidebarContext } from "context/SidebarContext";
import { UserRoleContext } from "context/UserRoleContext";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const isDashPage = location.includes("dash");
  const roleSelected = useContext(UserRoleContext).userSelectedRole;
  const isDarkMode = useContext(SidebarContext).isDarkMode;

  useEffect(() => {
    if (!roleSelected && isDashPage) {
      navigate("/");
    }
  }, [location, isDarkMode]);

  return (
    <_.MainLayoutContainer>
      {isDashPage && roleSelected ? (
        <>
          <Sidebar role={roleSelected} darkMode={isDarkMode} />
          <_.Content>
            <Header role={roleSelected} darkMode={isDarkMode} />
            <_.InnerContent $darkMode={isDarkMode}>{children}</_.InnerContent>
          </_.Content>
        </>
      ) : (
        <_.InnerRootContent>{children}</_.InnerRootContent>
      )}
    </_.MainLayoutContainer>
  );
}
