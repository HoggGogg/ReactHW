import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string,
    password: string
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobar',
        password: '1111'
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user);
    };

    // const handleUserNameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const inputUser = e.target as HTMLInputElement;
    //     console.log(inputUser.value);
    //     setFormState({...formState, username: inputUser.username})
    // };
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const inputPass = e.target as HTMLInputElement;
    //     console.log(inputPass.value);
    //     setFormState({...formState, password: inputPass.password})
    // };

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;