/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from 'react-bootstrap/Table';
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader';
import style from "./Users.module.css"
import DeleteModal from '../DeleteModal/DeleteModal';
import type { User } from '../../helpers/interfaces';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useFetch } from '../../helpers/useFetch';
import { useContext, useEffect, useState } from 'react';
import { FiCommand } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { UserContext, type UserContextInterface } from '../../contexts/userContext';

interface DataFetchedInterface {
  users?: User[]
}
export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const { user, setUser } = useContext(UserContext) as UserContextInterface
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const { data }: { data: DataFetchedInterface } | { data: never[]; } | any = useFetch(" https://dummyjson.com/users")
  const navigate = useNavigate()

  useEffect(() => {
    if (data)
      setUsers(data?.users)
  }, [data]);

  const goToEdit = (user: User) => {
    setUser(user)
    navigate("/dashboard/addUser")
  }

  const goToDelete = (user: User) => {
    setUser(user)
    setIsModalShown(true)

  }

  const handleClose = () => {
    setIsModalShown(false);
    setUser(null)
  }

  return (
    <>
      <ComponentsHeader title={"Users List"} btnTitle={"ADD NEW USER"} path={"/dashboard/addUser"} />

      {users?.length ?
        <div className={`container-fluid ${style?.users}`}>
          <Table hover size="sm" className={style?.usersTable}>
            <thead>
              <tr >
                <th className='py-3 ps-3'>Symbol</th>
                <th className='py-3'>First Name</th>
                <th className='py-3'>Last Name</th>
                <th className='py-3'>Phone</th>
                <th className='py-3'>Birth date</th>
                <th className='py-3'></th>

              </tr>
            </thead>
            <tbody>
              {users?.map((user: User, index: number) =>
                <tr key={index}>
                  <td className='py-3 ps-3'>
                    <img className='w-50' src={user?.image} alt='about us image' />
                  </td>
                  <td className='py-3'>{user?.firstName}</td>
                  <td className='py-3'>{user?.lastName}</td>
                  <td className='py-3'>{user?.phone}</td>
                  <td className='py-3'>{user?.birthDate}</td>
                  <td className='py-3'>
                    <div className='d-flex justify-content-around'>
                      <MdModeEdit size={45} className='text-mustard cursor-pointer pe-3'
                        onClick={() => { goToEdit(user) }} />
                      <MdDelete size={45} className='text-danger cursor-pointer'
                        onClick={() => goToDelete(user)} />

                    </div>
                  </td>

                </tr>
              )}
            </tbody>
          </Table>
        </div>
        :
        <div className='d-flex align-items-center justify-center h-100'>
          <FiCommand className="loading-icon text-mustard w-100 " />
        </div>}
      {isModalShown && <DeleteModal isModalShown={isModalShown} handleClose={handleClose} user={user} />}
    </>
  )
}
