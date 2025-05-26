import axios, { AxiosError } from "axios";
import type { DeleteModalProps } from "../../helpers/interfaces";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function DeleteModal({ isModalShown, handleClose, user }: DeleteModalProps) {
    
    const deleteUser = async () => {
        try {
            await axios.delete(`https://dummyjson.com/users/${user?.id}`)
            toast.success('User Deleted Successfully!');
            handleClose()
        }
        catch (error) {
            const err = error as AxiosError
            toast.error(err?.message);
        }
    }

    return (
        <>
            <Modal show={isModalShown} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteUser}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
