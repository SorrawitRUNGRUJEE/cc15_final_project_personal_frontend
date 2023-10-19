import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Unauthorized(){
    const navigate = useNavigate()

    useEffect(()=>{

        setTimeout(()=>{

            navigate('/')
        },5000)
    },[])
    return(
        <>
        <h1>You are not authorized to access this section
            <br />
        proceeding to home page....</h1>
        
        </>
        ) 

}