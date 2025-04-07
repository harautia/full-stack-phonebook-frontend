/* This file renders its contents into the div-element, defined in the file index.html, having the id value 'root'. */

import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(<App />);