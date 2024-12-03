import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@theme/index";
import Router from "./router";
import { GlobalStyle } from "@theme/global";
import ToastifyMessage from "@components/ToastifyMessage";
import MainLayout from "layouts/MainLayout";
import { UserRoleProvider } from "context/UserRoleContext";
import { SidebarProvider } from "context/SidebarContext";

function App() {
  return (
    <BrowserRouter>
      <UserRoleProvider>
        <SidebarProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <ToastifyMessage />
              <GlobalStyle />
              <Router />
            </MainLayout>
          </ThemeProvider>
        </SidebarProvider>
      </UserRoleProvider>
    </BrowserRouter>
  );
}

export default App;
