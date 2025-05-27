import React, { createContext, useEffect, useState } from "react";
import type { ContextProviderProps, User } from "../helpers/interfaces";
import { jwtDecode } from "jwt-decode";

interface AuthContextVariabls {
    userData: User | null;
    getUserData: () => void;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>
}


export const AuthContext = createContext<AuthContextVariabls | null>(null)
export default function AuthContextProvider({ children }: ContextProviderProps) {

    const [userData, setUserData] = useState<User | null>(null)

    const getUserData = () => {
        const enCodedUser = localStorage.getItem("token");
        if (enCodedUser)
            setUserData(jwtDecode(enCodedUser))
    }

    useEffect(() => {
        const enCodedUser = localStorage.getItem("token");
        if (enCodedUser)
            getUserData()
    }, []);

    return <AuthContext.Provider value={{ userData, getUserData, setUserData }}>
        {children}
    </AuthContext.Provider>

}