import { createContext } from "react";
import axios from "../config/axios";
import { useState, useEffect } from "react";
export const StoreContext = createContext()




export default function StoreContextProvider({children}){
const [allCategory,setAllCategory] = useState([])
const [allProduct,setAllProduct] = useState([])
const [exploreResult,setExploreResult] = useState(0)
const [exploreDisplay,setExploreDisplay] = useState([])
const [isOpen,setIsOpen] = useState(false)
const [secondPictureDisplay,setSecondPictureDisplay] = useState(null)

useEffect(()=>{
    axios.get('/store/product').then(res=> setAllProduct(res.data.result))
    axios.get('/store/category').then(res=> setAllCategory(res.data.result))
},[])
const set_explore_display = (input) =>{
    axios.get(`/store/category/${input}`).then(res=>setExploreDisplay(res.data.result))
}


const change_main_picture = async (input) =>{

    
}
const fetch_secondary_picture = async (input) =>{
    axios.get(`/store/picture/${input}`).then(res=>{
        console.log(res.data.result)
    })

    
}




    return <StoreContext.Provider value={{
        isOpen,
        setIsOpen,
        allCategory,
        allProduct,
        setAllProduct,
        setAllCategory,
        set_explore_display,
        setExploreResult,
        exploreResult,
        exploreDisplay,
        fetch_secondary_picture}}>
        {children}
    </StoreContext.Provider>
}