import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/queris/user";
const UserPage = () => {
    // const fetchUsers = () => axios.get('https://jsonplaceholder.typicode.com/users')

    // const { data, isLoading, isError, error, isFetching, refetch } = useQuery(["users"], fetchUsers, {
    //     cacheTime: 200,
    //     staleTime: 600,
    //     refetchOnMount: false,
    //     refetchOnWindowFocus: false,
    //     // refetchInterval: 200,
    //     // enabled: false,
    //     onSuccess: () => console.log('success'),
    //     onError: (error) => console.log("error", error)
    // })

    const { data, isLoading, isError, error, isFetching, refetch } = useUsersData()

    console.log({ data, isLoading, isError, error, isFetching })

    if (isLoading && isFetching) return (<>
        <h3>loading</h3>
    </>)


    if (isError) return <h3> Somethong went weong - {error.message}</h3>
    return (
        <>
            {/* < button onClick={refetch} > click</button > */}
            {data?.data.map(i => <Link to={`/users/${i.id}`}> <h3 key={i.id}>{i.name}</h3></Link>)}
        </>
    )
}
export default UserPage