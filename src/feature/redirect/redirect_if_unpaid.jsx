import { Navigate } from "react-router-dom"
import { useAuth } from "../../hook/use_auth"
export default function  RedirectIfunpaid({children}){
    const {user:{order}} = useAuth()
    if(!order[0].paymentStatus) return <Navigate to={'/transaction/confirm'}/>
    return children 
}