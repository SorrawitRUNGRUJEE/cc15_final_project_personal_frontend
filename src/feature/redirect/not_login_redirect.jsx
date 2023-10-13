import { useAuth } from "../../hook/use_auth";
import { Navigate } from "react-router-dom";
export default function NotLoginRedirect({children}){
        const {user} = useAuth()
        console.log( "++++++++++++++++++++++++++",user)
        if(!user) {
            return < Navigate to="/unauth" />
        }
        return children
}