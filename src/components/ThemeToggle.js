// src/components/ThemeToggle.js
import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
      <div className={theme}>{/* The rest of your app */}</div>
    </>
  );
};

export default ThemeToggle;
