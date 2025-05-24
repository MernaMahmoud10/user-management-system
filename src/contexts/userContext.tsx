import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { User } from "../helpers/interfaces";

interface userContextProviderProps {
    children: ReactNode
}
interface CounterContext {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>
}
export const UserContext = createContext<CounterContext | null>(null)


export function UserContextProvider({ children }: userContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
}
