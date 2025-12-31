import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";
import UpdateInputParerent from "./components/UpdateInputParerent";
import SubmitForm from "./components/SubmitForm";
import DerivedState from "./components/DerivedState";
import CountNumber from "./components/CountNumber";



createRoot(document.getElementById("root")).render(<CountNumber />);
