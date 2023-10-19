import {useContext} from "react"
import { AdminContext } from "../context/admin_context"

export const useAdmin = () =>{
    return useContext(AdminContext)
}