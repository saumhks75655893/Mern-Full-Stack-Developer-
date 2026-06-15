import React, { useState } from "react";
import Buttons from "./components/Buttons";
import UploadFile from "./components/UploadFile";
import ButtonBaseDemo from "./components/ButtonBaseDemo";
import ComboBox from "./components/ComboBox";
import RangeSlider from "./components/RangeSlider";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeChanger from "./components/ThemeChanger";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className="main">
          <Buttons />
          <br />
          <UploadFile />
          <br />
          <ButtonBaseDemo />
          <br />
          <h1> Find Your Movie : </h1>
          <ComboBox />
          <br />
          <RangeSlider />
        </div>
        <ThemeChanger darkMode={darkMode} themeSwitch={setDarkMode} />
      </ThemeProvider>
    </div>
  );
};

export default App;
