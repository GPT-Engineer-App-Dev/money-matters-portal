import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from '@emotion/react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global
      styles={`
        body {
          background-color: #fff1e5;
        }
      `}
    />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
