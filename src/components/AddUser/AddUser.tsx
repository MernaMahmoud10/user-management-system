import ComponentsHeader from '../ComponentsHeader/ComponentsHeader'
import UserInfoForm from "../UserInfoForm/UserInfoForm"
import { useContext, useEffect, useState } from "react"
import { UserContext, type UserContextInterface } from "../../contexts/userContext"

export default function AddUser() {
  const { user, setUser } = useContext(UserContext) as UserContextInterface
  const [status, setstatus] = useState<string>("add");
  const [userId, setuserId] = useState<number>();


  useEffect(() => {
    if (user) {
      setstatus("edit")
      setuserId(user?.id)
    }
    return () => {
      setUser(null)
    };
  }, [user]);

  return (
    <>
      <ComponentsHeader title={status == "edit" ? "Update User" : "Add New User"} />
      <div className={`py-4 px-5 formBox`}>
        <UserInfoForm user={user} status={status} userId={userId} />

      </div>

    </>
  )
}
