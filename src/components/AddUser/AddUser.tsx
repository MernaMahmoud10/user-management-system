/* eslint-disable @typescript-eslint/no-explicit-any */
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader'
import UserInfoForm from "../UserInfoForm/UserInfoForm"
import type { DataFetchedInterface, User } from '../../helpers/interfaces'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useFetch } from '../../helpers/useFetch'

export default function AddUser() {
  const [userToEdit, setUserToEdit] = useState<User | null>(null)
  const [status, setstatus] = useState<string>("add");
  const { id } = useParams()
  const { data }: { data: DataFetchedInterface } | { data: never[]; } | any = useFetch(`https://dummyjson.com/users/${id}`)

  useEffect(() => {
    if (id && data) {
      setstatus("edit")
      setUserToEdit(data)
    }
  }, [id, data]);

  return (
    <>
      <ComponentsHeader title={status == "edit" ? "Update User" : "Add New User"} />
      <div className={`py-4 px-5 formBox`}>
        <UserInfoForm user={userToEdit} status={status} userId={id} />

      </div>

    </>
  )
}
