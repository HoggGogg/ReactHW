import {simpsons} from "../../data/arrays.ts";
import {Character} from "../character/Character.tsx";

export const Family = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <Character key={index} item={value}>
                    {value.info}
                </Character>)
            }
        </div>
    );
};