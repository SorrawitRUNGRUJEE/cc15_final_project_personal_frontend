import { useAuth } from "../../hook/use_auth";
import { Navigate } from "react-router-dom";
import{getAccessToken} from "../../utils/localStorage"
export default function NotLoginRedirect({children}){
        const {user} = useAuth()
        if(!getAccessToken()) return < Navigate to="/unauth" />
        if(!user) return < Navigate to="/unauth" />
        
        return children
}