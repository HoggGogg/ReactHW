import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

function App() {

    const users = useFetch<{ id: number, name: string }[]>('https://jsonplaceholder.typicode.com/users', []);

    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id}>
                        {user.name} : {user.id}
                    </div>
                ))
            }
        </>
    );
}

export default App
