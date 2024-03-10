import { useState } from "react"
import useAppStore from "../stores/appStore"
import { useShallow } from "zustand/react/shallow"

export default function UserGithub(): JSX.Element {
    const [username, setUsername] = useState<string>('')
    const [errorField, setErrorField] = useState<string>('')
    const { user, getProfile } = useAppStore(useShallow((state) => ({ user: state.user, getProfile: state.getProfile })))

    function handleInput(value: string) {
        setUsername(value)
    }

    function handleGetProfile() {
        if (!username) {
            setErrorField("username required !!!")
            return
        }

        setErrorField("")
        getProfile(username)
    }

    function renderContent(): JSX.Element {
        if (errorField) {
            return (<span>{errorField}</span>)
        }

        return (
            <div>
                <a href={user?.html_url} target="__blank">{user?.name}</a>
                <div>
                    <p>Public Repos: {user?.public_repos}</p>
                    <p>Following: {user?.following}  </p>
                    <p>Followers: {user?.followers}</p>
                </div>
                <img src={user?.avatar_url} alt="profile" width={120} height={120} />
            </div>
        )

    }
    return (
        <>
            <h1>Get Profile Github</h1>
            <span> <input type="text" placeholder="username" onChange={(event) => handleInput(event.target.value)} /></span>
            <button type="button" onClick={handleGetProfile}>Search</button>
            <br />
            {renderContent()}
        </>
    )
}