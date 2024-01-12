import { Navigate } from "react-router-dom"
import { useAuth } from "../../hook/use_auth"
export default function  RedirectIfPaymentSlipPresent({children}){
    
    const {user:{order}} = useAuth()
    if(order.length < 1) return children
    if(order[0].paymentSlip && !order[0].paymentStatus) return <Navigate to='/transaction/authen'/>
    return children 
}