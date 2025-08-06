import {createContext} from "react";

type ContextValueType = {
    theme: string,
    changeTheme: (theme: string) => void;
}
const defaultValue: ContextValueType = {
    theme: 'Yellow',
    changeTheme: (theme: string) => {
        console.log(theme);
    }
};
export const MyContextProvider = createContext<ContextValueType>(defaultValue);