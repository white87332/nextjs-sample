import { useMemo } from 'react';
import useSWR from 'swr';

// const fetcher = url => fetch(url).then(res => res.json());
// const fetcher = (url, params) => fetch(url + params.id).then(res => res.json());
export default function useUser()
{
    // const { data: user } = useSWR('https://jsonplaceholder.typicode.com/users/4', fetcher );
    // const { data: posts } = useSWR(() => `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, fetcher);
    
    // const id = 20;
    // const params = useMemo(() => {
    //     return { id }
    // }, [id]);
    //
    // const { data: post } = useSWR(
    //     ['https://jsonplaceholder.typicode.com/posts/', params],
    //     fetcher
    // );

    const { data: repo, error } = useSWR([]);

    return post;
}
