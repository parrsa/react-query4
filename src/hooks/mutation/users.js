import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const CreateUsers = (data) => {
    const addPost = (data) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts',)
    }
    return useMutation(addPost)
}

export { CreateUsers }