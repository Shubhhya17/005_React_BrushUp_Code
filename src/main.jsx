import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";
import UpdateInputParerent from "./components/UpdateInputParerent";
import SubmitForm from "./components/SubmitForm";
import DerivedState from "./components/DerivedState";
import CountNumber from "./components/CountNumber";
import UsestateEx from "./components/01_useState"
import ToggleSwitch from "./components/02_Toggle_Switch";



createRoot(document.getElementById("root")).render(<ToggleSwitch />);
