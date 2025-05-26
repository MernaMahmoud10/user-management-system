import style from "./Login.module.css"
import { useForm } from 'react-hook-form'
import type { LoginInps } from '../../helpers/interfaces'
import axios, { AxiosError } from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react"

interface getUserDataInterface {
    getUserData: () => void
}

export default function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInps>()
    const { getUserData } = useContext(AuthContext) as getUserDataInterface
    const onSubmit = async (data: LoginInps) => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", data)
            toast.success('You Logged in Successfully!');
            navigate("/users")
            localStorage.setItem("token", response?.data?.accessToken)
            getUserData()
        }
        catch (error) {
            const err = error as AxiosError
            toast.error(err?.message);
        }
    }

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
