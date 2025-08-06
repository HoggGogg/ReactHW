import {useContext} from "react";
import {MyContextProvider} from "../context/MyContextProvider.tsx";

export const Ba = () => {

    const {changeTheme} = useContext(MyContextProvider);
    
    const handlerCool = () => {
        changeTheme('Crimson');
    };
    const handlerBoring = () => {
        changeTheme('Yellow');
    };
    return (
        <div>
            <button onClick={handlerCool}>Change Theme to cool Crimson</button>
            <button onClick={handlerBoring}>Change Theme to boring Yellow</button>
        </div>
    );
};