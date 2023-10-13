import {createContext} from "react"
import axios from "../config/axios"
import { Navigate } from "react-router-dom"


export const AuthContext  = createContext()
export default function AuthContextProvider({children}){
   
    const register = async (data) =>{
        await axios.post('/auth/register',data).then(res=>{
            alert(res.data.msg)
        }).catch(error=>{
            alert(error.response.data.msg);
            throw error
        })

    }

    const login = async (data) =>{
     await   axios.post('/auth/login',data).then(res=>{
            alert(res.data.msg)
         
        }).catch(error=>{
            alert(error.response.data.msg)
            
            throw error
        })
    }

    return <AuthContext.Provider value={{register,login}}>
        {children}
    </AuthContext.Provider>
}