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
import CounterValue from "./components/03_GetServerSideProps";
import LazyLoading from "./components/04_Lazy_Loading";
import UserData from "./components/05_Promise_Ex";
import Parent from "./components/06_Parent";
import Child from "./components/Child";



createRoot(document.getElementById("root")).render(<Parent/>);
