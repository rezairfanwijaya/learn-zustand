import { create } from "zustand"
import { persist } from "zustand/middleware"

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
    resetCount: () => void
    username: string
    setUsername: (username: string) => void
    user: User | undefined
    getProfile: (name: string) => void
    reset: () => void
}

// persist can save the last state when the browser is reloading
const useAppStore = create<AppStore>()(persist((set) => ({
    count: 0,
    increase: () => {
        set((state) => ({ count: state.count + 1 }))
    },
    decrease: () => {
        set((state) => ({ count: state.count - 1 }))
    },
    resetCount: () => {
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
    },

    reset: () => {
        set(() => ({ count: 0, username: "Deafult", user: undefined }))
    }
}), { name: "app-store" }))

export default useAppStore