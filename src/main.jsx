import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";
// import SubmitForm from "./components/SubmitForm";
// import DerivedState from "./components/DerivedState";
// import CountNumber from "./components/CountNumber";
import UsestateEx from "./components/01_useState"
import ToggleSwitch from "./components/02_Toggle_Switch";
import CounterValue from "./components/03_GetServerSideProps";
import LazyLoading from "./components/04_Lazy_Loading";
import UserData from "./components/05_Promise_Ex";
import Parent from "./components/06_Parent";
import Child from "./components/Child";
import ExuseMemo from "./components/07_UseMemo";
import Practice from "./components/Practice";
import PromiseEx from "./components/05_Promise_Ex";
import Counter2 from "./components/01_useState";
import MyLoading from "./components/04_Lazy_Loading";
import MyMemo from "./components/07_UseMemo";
import MapReduce from "./components/MapReduce";



createRoot(document.getElementById("root")).render(<Practice/>);
