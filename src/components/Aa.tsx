import {useContext} from "react";
import {MyContextProvider} from "../context/MyContextProvider.tsx";
import './css/Aa.css';

export const Aa = () => {

    const {theme} = useContext(MyContextProvider);

    return (
        <div className={theme}>
            This is the text, yes, yes, don't be surprised, dear Mentor :)
        </div>
    );
};