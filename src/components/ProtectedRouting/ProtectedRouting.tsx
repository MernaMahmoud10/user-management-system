import { Navigate } from 'react-router-dom'
import type { ContextProviderProps } from '../../helpers/interfaces'

export default function ProtectedRouting({ children }: ContextProviderProps) {
    if (localStorage?.getItem("token"))
        return children
    else {
        return <Navigate to={'/'} />
    }
}


