import style from "./AddUser.module.css"
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader'
import axios, { AxiosError } from 'axios'
import type { AddUserInps, User } from '../../helpers/interfaces'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export default function AddUser(props: {
  user?: User
}) {
  console.log(props?.user)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<AddUserInps>()

  const onSubmit = async (data: AddUserInps) => {
    if (props?.user?.id == null)
      try {
        await axios.post("https://dummyjson.com/users/add", data)
        toast.success('User Added Successfully!');
        navigate("/users")
      }
      catch (error) {
        const err = error as AxiosError
        toast.error(err?.message);
      }
    else {

      try {
        await axios.put(`https://dummyjson.com/users/${props?.user?.id}`, data)
        toast.success('User Updated Successfully!');
        navigate("/users")
      }
      catch (error) {
        const err = error as AxiosError
        toast.error(err?.message);
      }

    }
  }


  return (
    <>
      <ComponentsHeader title={props?.user ? "Update User" : "Add New User"} />
      <div className={`py-4 px-5 ${style?.addUserBox}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row pt-4'>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>First Name</label>
              <input className='form-control' type='name' placeholder='Enter your First Name'
                defaultValue={props?.user?.firstName}
                {...register('firstName', { required: "firstName is required" })} />
              {errors && <span className='text-danger'>{errors?.firstName?.message}</span>}
            </div>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>Last Name</label>
              <input className='form-control' type='name' placeholder='Enter your Last Name'
                defaultValue={props?.user?.lastName}
                {...register('lastName', { required: "lastName is required" })} />
              {errors && <span className='text-danger'>{errors?.lastName?.message}</span>}
            </div>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>Email</label>
              <input className='form-control' type='name' placeholder='Enter your Email'
                defaultValue={props?.user?.email}
                {...register('email', { required: "email is required" })} />
              {errors && <span className='text-danger'>{errors?.email?.message}</span>}
            </div>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>Age</label>
              <input className='form-control' type='name' placeholder='Enter your Age'
                defaultValue={props?.user?.age}
                {...register('age', { required: "age is required" })} />
              {errors && <span className='text-danger'>{errors?.age?.message}</span>}
            </div>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>Phone Number</label>
              <input className='form-control' type='name' placeholder='Enter your Phone Number'
                defaultValue={props?.user?.phone}
                {...register('phone', { required: "phone is required" })} />
              {errors && <span className='text-danger'>{errors?.phone?.message}</span>}
            </div>
            <div className="col-sm-12 col-md-6 mb-3 pe-5">
              <label>Birth Date</label>
              <input className='form-control' type='name' placeholder='Enter your Birth Date'
                defaultValue={props?.user?.birthDate}
                {...register('birthDate', { required: "birthDate is required" })} />
              {errors && <span className='text-danger'>{errors?.birthDate?.message}</span>}
            </div>
          </div>
          <div className='d-flex justify-content-center mt-4 mb-4'>
            <button className='bg-mustard text-white py-2 w-50 border-0 rounded-2' type='submit'>{props?.user ? "Save Changes" : "Save"}</button>
          </div>
        </form>

      </div>

    </>
  )
}
