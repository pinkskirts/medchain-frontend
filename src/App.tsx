import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@theme/index";
import Router from "./router";
import { GlobalStyle } from "@theme/global";
import ToastifyMessage from "@components/ToastifyMessage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastifyMessage />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
