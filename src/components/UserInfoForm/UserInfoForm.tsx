import axios, { AxiosError } from 'axios'
import type { AddUserInps, User } from '../../helpers/interfaces'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Iprops {
    user: User | null;
    status: string;
    userId?:number
}
export default function UserInfoForm({ user, status ,userId}: Iprops) {
    const { register, handleSubmit, formState: { errors } } = useForm<AddUserInps>()
    const [isreadOnly, setIsreadOnly] = useState<boolean>(false);
    

    const navigate = useNavigate()

    const onSubmit = async (data: AddUserInps) => {
        if (status === "add")
            try {
                await axios.post("https://dummyjson.com/users/add", data)
                toast.success('User Added Successfully!');
                navigate("/dashboard/users")
            }
            catch (error) {
                const err = error as AxiosError
                toast.error(err?.message);
            }
        else if (status === "edit" && userId) {

            try {
                await axios.put(`https://dummyjson.com/users/${userId}`, data)
                toast.success('User Updated Successfully!');
                navigate("/dashboard/users")
            }
            catch (error) {
                const err = error as AxiosError
                toast.error(err?.message);
            }

        }
    }

    useEffect(() => {
        if (status === "profile")
            setIsreadOnly(true)
        else {
            setIsreadOnly(false)
        }
    }, [status]);
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row pt-4'>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5">
                        <label>First Name</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your First Name'
                            defaultValue={user?.firstName}
                            {...register('firstName', { required: "firstName is required" })} />
                        {errors && <span className='text-danger'>{errors?.firstName?.message}</span>}
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5">
                        <label>Last Name</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your Last Name'
                            defaultValue={user?.lastName}
                            {...register('lastName', { required: "lastName is required" })} />
                        {errors && <span className='text-danger'>{errors?.lastName?.message}</span>}
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5">
                        <label>Email</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your Email'
                            defaultValue={user?.email}
                            {...register('email', { required: "email is required" })} />
                        {errors && <span className='text-danger'>{errors?.email?.message}</span>}
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5">
                        <label>Age</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your Age'
                            defaultValue={user?.age}
                            {...register('age', { required: "age is required" })} />
                        {errors && <span className='text-danger'>{errors?.age?.message}</span>}
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5">
                        <label>Phone Number</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your Phone Number'
                            defaultValue={user?.phone}
                            {...register('phone', { required: "phone is required" })} />
                        {errors && <span className='text-danger'>{errors?.phone?.message}</span>}
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 pe-5 mb-5">
                        <label>Birth Date</label>
                        <input readOnly={isreadOnly} className='form-control' type='name' placeholder='Enter your Birth Date'
                            defaultValue={user?.birthDate}
                            {...register('birthDate', { required: "birthDate is required" })} />
                        {errors && <span className='text-danger'>{errors?.birthDate?.message}</span>}
                    </div>
                </div>
                {status !== "profile" &&
                    <div className='d-flex justify-content-center mb-4'>
                        <button className='bg-mustard text-white py-2 w-25 border-0 rounded-2 px-5' type='submit'>{status == "add" ? "Save" : "Save Changes"}</button>
                    </div>}
            </form>
        </>
    )
}
