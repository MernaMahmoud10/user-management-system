import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../helpers/interfaces";
import { jwtDecode } from "jwt-decode";

interface AuthContextVariabls {
    userData?: User | null;
    getUserData?: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextVariabls | null>(null)
export default function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [userData, setUserData] = useState<User | null>(null)
    const enCodedUser = localStorage.getItem("token");

    const getUserData = () => {
        if (enCodedUser)
            setUserData(jwtDecode(enCodedUser))
    }

    useEffect(() => {
        if (enCodedUser)
            getUserData()
    }, []);
    return <AuthContext.Provider value={{ userData, getUserData }}>
        {children}
    </AuthContext.Provider>

}