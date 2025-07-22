import './App.css'
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {


    return (
        <>
            This is App components
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
}

export default App
