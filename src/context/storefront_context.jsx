import { createContext } from "react";
import axios from "../config/axios";
import { useState, useEffect } from "react";
import {toast} from "react-toastify"
import { Result } from "postcss";
export const StoreContext = createContext()




export default function StoreContextProvider({children}){
const [allCategory,setAllCategory] = useState([])
const [allProduct,setAllProduct] = useState([])
const [explore,setExplore] = useState(null)
const [exploreContent,setExplorecontent] = useState(null)
const [mainProduct,setMainProduct] = useState(null)
const [isOpen,setIsOpen] = useState(false)
const [allPicture,setAllPicture] = useState(null)
const [productPicture,setProductPicture] = useState(null)

useEffect(()=>{
    axios.get('/store/product').then(res=> setAllProduct(res.data.result))
    axios.get('/store/category').then(res=> setAllCategory(res.data.result))
    axios.get('/store/picture').then(res=> setAllPicture(res.data.result))
    
},[])


const hdl_explore_content = (id) =>{
    let content = []
    allCategory.map(el => {
        if(el.id == id){
            for(let i of el.productCategory){
                for(let j of allProduct){
                    if(i.product.id == j.id){
                        let result = {...i.product,...j}
                        content.push(result)
                    }
                  
                }
            }
            setExplorecontent(content)
        }
    })
}

const hdl_main_product = (id) =>{
    allProduct.filter(el=>{
        if(el.id == id)
        setMainProduct(el)
    })

}

const hdl_edit_photo = (id) =>{
    let result = []
    for(let i of allPicture){
        if(i.productId == id){
            result.push(i)
        }
    }
    setProductPicture(result)
}

const hdl_basket = (id) =>{
    axios.post(`/store/basket/${id}`).then(res=>{
        alert("product added")
    }).catch( err =>{
        alert(err.response.data.msg)
    }
        
    )
}


    return <StoreContext.Provider value={{
        isOpen,
        setIsOpen,
        allCategory,
        allProduct,
        setExplore,
        explore,
        hdl_explore_content,
        exploreContent,
        allProduct,
        hdl_main_product,
        mainProduct,
        hdl_edit_photo,
        productPicture,
        setAllCategory,
        setAllProduct,
        setExplorecontent,
        hdl_basket,
}}>     
        {children}
    </StoreContext.Provider>
}