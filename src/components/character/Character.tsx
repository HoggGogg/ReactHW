import type {ICharacter} from "../../ICharacter/ICharacter.ts";
import type {ReactNode} from "react";
import './Character.css'

interface CharacterProps {
    item: ICharacter
    children: ReactNode
}

export const Character = ({item, children}: CharacterProps) => {
    return (
        <div className='my-20 border-2'>
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};