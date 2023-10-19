import { createContext } from "react";
import axios from "axios";
import {useState,useEffect} from "react"

export const AdminContext = createContext()

export default function AdminContextProvider({children}){
    const [input,setInput] = useState({})
    const [isOpen,setIsOpen] = useState("")
    const [allAdmin,setAllAdmin] = useState(null)
    const [allProduct,setAllProduct] = useState(null)



    useEffect(()=>{
        axios.get('/admin').then(res =>
            setAllAdmin(res.data.result)
        )
        axios.get('/admin/product').then(res=>setAllProduct(res.data.result))


    },[])
    const hdl_input = e =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const add_admin = async(input) =>{
        
        await axios.post('/admin',input).then(res=>
            {
                setIsOpen("")
                alert(res.data.msg)
            }
        ).catch( error =>{
            alert(error.response.data.msg)
            throw error
        }).finally( ()=>{
            setInput({})
        })

    }

    const delete_admin =  async(input) =>{
        
        
        axios.delete(`/admin/${input.id}/${input.username}`).then( res=>{
            alert(res.data.msg)
            setIsOpen("")
        }).catch( error=>{
            alert(error.response.data.msg)

        }).finally(()=>{
            setInput({})
        })

    }
    
    const add_product = async(input) =>{
        await axios.post('/admin/product',input).then(res =>{
            setIsOpen("")
            alert(res.data.msg)
        }).catch(error=>{
            alert(error.response.data.msg)
        }).finally(()=>{
            setInput({})
        })
    }

    const update_product = async(input) =>{
        await axios.patch('/admin/product',input).then(res=>{
            setAllAdmin("")
            alert(res.data.msg)
        }).catch(error=>{
            alert(error.response.data.msg)
        }).finally(()=>{
            setInput({})
        })
    }


return <AdminContext.Provider value={{update_product,input,add_product,hdl_input,add_admin,isOpen,setIsOpen,allAdmin,delete_admin}}>
    {children}
</AdminContext.Provider>
}
