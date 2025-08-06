import {useContext} from "react";
import {MyContext} from "../context/MtContext.tsx";

export const RightBranchA = () => {

    const {counterValue, increment} =
    useContext(MyContext);

    return (
        <div>
            RightA

            <button onClick={() => {
                increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};