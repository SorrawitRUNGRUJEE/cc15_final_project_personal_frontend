import {createContext} from "react"
import axios from "../config/axios"
export const AuthContext  = createContext()
export default function AuthContextProvider({children}){



    
    const register = (data) =>{
        axios.post('/auth/register',data).then(res=>{
            alert(res.data.msg)
        }).catch(error=>{
            alert(error.response.data.msg)
        })

    }

    return <AuthContext.Provider value={{register}}>
        {children}
    </AuthContext.Provider>
}