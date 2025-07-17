import type {TodoModel} from "../model/TodoModel";

const endpoint = import.meta.env.VITE_API_BASE_URL + '/todos'

const loadTodos = async (): Promise<TodoModel[]> => {
    return await fetch(endpoint)
        .then((value) => value.json());
};

export {loadTodos}