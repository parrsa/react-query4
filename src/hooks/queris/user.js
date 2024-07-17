import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useUsersData = () => {
    const fetchUsers = () => axios.get('https://jsonplaceholder.typicode.com/users')

    return useQuery(['users'], fetchUsers)
}

const useUsersDetails = (id) => {

    const fetchUserDetails = ({ queryKey }) => {
        console.log(queryKey)
        return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)
    }

    return useQuery(['users', id], fetchUserDetails)
}


export { useUsersData, useUsersDetails }