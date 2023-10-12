import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

export const useAuth = () =>{
    return useContext(AuthContext)
}