import UserInfoForm from '../UserInfoForm/UserInfoForm'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import type { UserDataProps } from '../../helpers/interfaces';
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader';


export default function Profile() {
  const { userData } = useContext(AuthContext) as UserDataProps
  return (
    <>
      <ComponentsHeader title={"Profile"} />
      <div className={`py-4 px-5 formBox`}>
        <UserInfoForm user={userData} status={"profile"} />
      </div>
    </>
  )
}
