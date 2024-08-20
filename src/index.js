import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Route } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Route>
);

