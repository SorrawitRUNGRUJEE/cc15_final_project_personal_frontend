import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
export default function Logout(){
    const navigate=  useNavigate()
    useEffect(()=>{


        setTimeout(() => {
            navigate('/')
        }, 5000);

    },[])
    return <h1>Logging out, hope to see you soon</h1>
}