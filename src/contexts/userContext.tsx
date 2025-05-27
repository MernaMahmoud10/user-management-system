import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { ContextProviderProps, User } from "../helpers/interfaces";

export interface UserContextInterface {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextInterface | null>(null)


export function UserContextProvider({ children }: ContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
}
