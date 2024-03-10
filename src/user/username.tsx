import { useShallow } from "zustand/react/shallow"
import useAppStore from "../stores/appStore"

export default function Username(): JSX.Element {
    // shallow used when we return object or array from the stores
    // shallow will prevant js behavior failed compare object or array
    // shallow allow us to compare object or array without reeferences
    // info: in js array and object is reference type (in go, like pointer) not values type 
    // example: ["a"] === ["a"] = false (default js behaviour)
    // example: {name:"john"} === {name:"john"} = false (default js behaviour)
    // with shallow ["a"] === ["a"] = true
    const { username, setUsername } = useAppStore(useShallow((state) => ({ username: state.username, setUsername: state.setUsername })))

    function handleUpdateUsername(e: any): void {
        setUsername(e.target.value)
    }

    return (
        <>
            <h1>Username: {username}</h1>
            <input type="text" placeholder="update username" onChange={(e) => handleUpdateUsername(e)} />
        </>
    )
}