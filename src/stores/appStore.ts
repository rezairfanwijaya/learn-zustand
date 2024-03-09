import { create } from "zustand"

interface AppStore {
    count: number
    increase: () => void
    decrease: () => void
    reset: () => void
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
    }
}))

export default useAppStore