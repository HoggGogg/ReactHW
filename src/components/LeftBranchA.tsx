import {useContext} from "react";
import {MyContext} from "../context/MtContext.tsx";

export const LeftBranchA = () => {

    const {counterValue} =
        useContext(MyContext);

    return (
        <div>
            LeftA

            <p>current counter value is = {counterValue}</p>
        </div>
    );
};