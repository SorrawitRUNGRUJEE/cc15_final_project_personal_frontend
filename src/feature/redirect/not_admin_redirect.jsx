import { useAuth } from "../../hook/use_auth";
import { Navigate } from "react-router-dom";
export default function NotAdminRedirect({children}){
        const {user:{isAdmin}}  = useAuth()
        
        
        if(!isAdmin ) return < Navigate to="/unauth" />
        return children
}