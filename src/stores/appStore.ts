import { create } from "zustand"

interface User {
    id: string,
    name: string
    followers: number
    following: number
    avatar_url: string
    public_repos: string
    html_url: string
}
interface AppStore {
    count: number
    increase: () => void
    decrease: () => void
    reset: () => void
    username: string
    setUsername: (username: string) => void
    user: User | undefined
    getProfile: (name: string) => void
}

const useAppStore = create<AppStore>((set) => ({
    count: 0,
    increase: () => {
        set((state) => ({ count: state.count + 1 }))
    },
    decrease: () => {
        set((state) => ({ count: state.count - 1 }))
    },
    reset: () => {
        set(() => ({ count: 0 }))
    },


    username: "Default",
    setUsername: (username: string) => {
        set({ username: "Default" })
        if (username !== "") {
            set({ username })
        }
    },

    user: undefined,
    getProfile: async (name: string) => {
        const resp = await fetch(`https://api.github.com/users/${name}`)
        const data = await resp.json()
        set(() => ({ user: data }))
    }
}))

export default useAppStore