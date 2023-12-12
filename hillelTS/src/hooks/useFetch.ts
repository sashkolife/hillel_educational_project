import {useCallback, useEffect, useMemo, useState} from "react";
import {IFetch} from "../models/models.ts";

const useFetch = (url: string): IFetch => {
    const [data, setData] = useState<any[]|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null>(null);

    const abortController: AbortController = useMemo<AbortController>(() => new AbortController(), []);

    const getData = useCallback(async () => {
        const signal: AbortSignal = abortController.signal;

        try {
            setError(null);
            setIsLoading(true);
            setData(null);

            const responce: Response = await fetch(url, {signal});

            if (!responce.ok) {
                throw new Error("Failed fetch");
            }

            const data = await responce.json();
            setData(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [abortController.signal, url]);

    useEffect(() => {
        getData();

        return () => {
            abortController.abort();
        }
    }, [abortController, getData]);

    return {
        data: data,
        isLoading: isLoading,
        error: error,
        refetch: getData}
}

export default useFetch;