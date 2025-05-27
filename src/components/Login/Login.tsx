import style from "./Login.module.css"
import axios, { AxiosError } from 'axios'
import type {  LoginInps, User } from '../../helpers/interfaces'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from "react"
import { useForm } from 'react-hook-form'

export interface interfaceLogin {
    getUserData: () => void;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>
}

export default function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInps>()
    const { getUserData, setUserData } = useContext(AuthContext) as interfaceLogin
    const onSubmit = async (data: LoginInps) => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", data)
            toast.success('You Logged in Successfully!');
            navigate("/dashboard/users")
            localStorage.setItem("token", response?.data?.accessToken)
            getUserData()
        }
        catch (error) {
            const err = error as AxiosError
            toast.error(err?.message);
        }
    }

    useEffect(() => {
        localStorage?.removeItem("token")
        setUserData(null)
    }, []);

    return (
        <div className='container-fluid'>
            <div className={`row ${style?.LoginPage}`}>
                <div className={`px-4 rounded-3 py-5 col-md-3 col-12 ${style?.LoginModule}`}>
                    <h5>User Management System</h5>
                    <div className='py-4 d-flex flex-column align-items-center'>
                        <h6 className={`${style?.signInTitle}`}>Sign In</h6>
                        <small>Enter your credentials to access your account</small>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Username</label>
                            <input className='form-control' type='name' placeholder='Enter your name'
                                {...register('username', { required: "username is required" })} />
                            {errors && <span className='text-danger'>{errors?.username?.message}</span>}
                        </div>
                        <div className='pt-3 pb-4'>
                            <label>password</label>
                            <input className='form-control' type='password' placeholder='Enter your password'
                                {...register('password', { required: "password is required" })} />
                            {errors && <span className='text-danger'>{errors?.password?.message}</span>}

                        </div>
                        <button type='submit' className='w-100 py-2 mb-3'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
