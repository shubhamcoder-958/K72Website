import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Stairss from "./components/home/common/Stairss.jsx";
import NavContext from "./context/NavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairss>
        <NavContext>
          <App />
        </NavContext>
      </Stairss>
    </BrowserRouter>
  </React.StrictMode>
);
