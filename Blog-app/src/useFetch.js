import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {                          //to check server errors
                    throw Error('Could not fetch the data from server');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);    //to get the data in next iteration

            })
            .catch((err) => {
                setIsPending(false);          //should not show the loading msg if there is an error
                setError(err.message);
            });
    }, []);

    return { data, isPending, error }
}

export default useFetch;