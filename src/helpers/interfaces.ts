export interface LoginInps {
    username: string;
    password: string
}
export interface User {
    username: string;
    email: string;
    phone: string;
    birthDate: string;
    image: string;
}

export interface AddUserInps {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: number;
    birthDate: string
}

export interface AddUserComponentProps {
    status: string;
    title: string;
}