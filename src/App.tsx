import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {MyContextProvider} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('Yellow');

    return (
        <div>
            <MyContextProvider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue);
                }
            }}>
                <A/>
                <B/>
            </MyContextProvider>
        </div>
    );
}

export default App
