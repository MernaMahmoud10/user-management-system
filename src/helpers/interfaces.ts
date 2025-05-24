export interface LoginInps {
    username: string;
    password: string
}
export interface User {
    id:number;
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
    id:number;
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