import { FaRegCirclePlay } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between py-2 my-1 px-4 navbar">
      <div>
        <FaRegCirclePlay size={25} color="#C4C4C4" />
      </div>
      <div className="d-flex align-items-center">
        <input className="form-control w-100 me-4" placeholder="Search..." />
        <IoNotificationsOutline size={25} color="#C4C4C4" />
      </div>
    </div>
  )
}
