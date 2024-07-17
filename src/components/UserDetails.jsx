import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useUsersDetails } from "../hooks/queris/user";
const UsersDetails = () => {
    const { id } = useParams();
    // const fetchUserDetails = ({ queryKey }) => {
    //     console.log(queryKey)
    //     return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)
    // }
    // const { data } = useQuery(['users', id], fetchUserDetails)
    const { data } = useUsersDetails(id)
    console.log(data)
    return <div><Link to={'/users'}>Users{id} - </Link></div>
}
export default UsersDetails 