import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { CreateUsers } from "../hooks/mutation/users"
function Form() {

    const { mutate, data, isLoading } = CreateUsers()

    console.log(data, isLoading);

    const sendHandelr = () => {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        mutate(data)
    }
    return (
        <>
            <div>Forms</div>
            <button onClick={sendHandelr}>Send</button>
        </>
    )
}
export default Form