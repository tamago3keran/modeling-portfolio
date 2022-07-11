import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { MainLayout } from "./components/Layout/MainLayout";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50]
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
