import { Navigate } from "react-router-dom"
import { useAuth } from "../../hook/use_auth"
export default function  RedirectIfunpaid({children}){
    
    const {user:{order}} = useAuth()
    if(order.length < 1) return children
    if(!order[0].paymentStatus && order[0].paymentSlip) return children
    if(!order[0].paymentStatus) return <Navigate to='/transaction/confirm'/>
    return children 
}