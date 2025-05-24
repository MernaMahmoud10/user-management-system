import Table from 'react-bootstrap/Table';
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader';
import style from "./Users.module.css"
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useFetch } from '../../helpers/useFetch';
import { useEffect, useState } from 'react';
import type { User } from '../../helpers/interfaces';
import { FiCommand } from 'react-icons/fi';
import AddUser from '../AddUser/AddUser';
import { useNavigate } from 'react-router-dom';


export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User>();
  const [status, setstatus] = useState<string>("add");
  const { data } = useFetch(" https://dummyjson.com/users")
const navigate=useNavigate()

  useEffect(() => {
    if (data)
      setUsers(data?.users)
  }, [data]);

  const goToEdit = (user: User) => {
    debugger;
    // navigate("/addUser")
    setUserToEdit(user)
    setstatus("edit")
  }

  return (
    <>
      {status == "add" &&
        <>
          <ComponentsHeader title={"Users List"} btnTitle={"ADD NEW USER"} path={"/addUser"} />

          {users?.length ?
            <div className={`container-fluid ${style?.users}`}>
              <Table hover size="sm" className={style?.usersTable}>
                <thead>
                  <tr >
                    <th className='py-3 ps-3'>Symbol</th>
                    <th className='py-3'>Name</th>
                    <th className='py-3'>Email</th>
                    <th className='py-3'>Phone</th>
                    <th className='py-3'>Birth date</th>
                    <th className='py-3'></th>

                  </tr>
                </thead>
                <tbody>
                  {users?.map((user: User, index: number) =>
                    <tr key={index}>
                      <td className='py-3 ps-3'>
                        <img className='w-25' src={user?.image} />
                      </td>
                      <td className='py-3'>{user?.username}</td>
                      <td className='py-3'>{user?.email}</td>
                      <td className='py-3'>{user?.phone}</td>
                      <td className='py-3'>{user?.birthDate}</td>
                      <td className='py-3'>
                        <div className='d-flex justify-content-around'>
                          <MdModeEdit size={30} className='text-mustard cursor-pointer'
                            onClick={() => { goToEdit(user) }} />
                          <MdDelete size={30} className='text-danger cursor-pointer' />

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
        </>}
      {status == "edit" && <AddUser user={userToEdit} />}
    </>
  )
}
