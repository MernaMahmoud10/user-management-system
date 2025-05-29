import type { ReactNode } from "react";

export interface LoginInps {
    username: string;
    password: string
}
export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    birthDate: string;
    image: string;
}

export interface AddUserInps {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: number;
    birthDate: string
}

export interface AddUserComponentProps {
    user?: User
}

export interface DeleteModalProps {
    handleClose: () => void;
    isModalShown: boolean;
    id: number|undefined
}
export interface UserDataProps {
    userData: User | null
}

export interface IUserData {
    userData: User | null;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>
}

export interface ComponentsHeaderProps {
    title: string;
    btnTitle?: string
    path?: string
}
export interface ContextProviderProps {
    children: ReactNode
}
export interface DataFetchedInterface {
    users?: User[]
}
