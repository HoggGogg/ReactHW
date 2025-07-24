import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

export const Some = () => {

    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg)
    }, [query]);

    return (
        <div>

        </div>
    );
};
