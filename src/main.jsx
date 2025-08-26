import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";
import UpdateInputParerent from "./components/UpdateInputParerent";
import SubmitForm from "./components/SubmitForm";
import DerivedState from "./components/DerivedState";



createRoot(document.getElementById("root")).render(<DerivedState />);
