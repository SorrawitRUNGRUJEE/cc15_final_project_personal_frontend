import { useStore } from "../hook/use_Store"

import { useAuth } from "../hook/use_auth"
import {getAccessToken} from "../utils/localStorage"



export default function ProductDetail(){

    const {mainProduct,hdl_basket} = useStore()
    const {user} = useAuth()
    console.log(mainProduct)

    if(getAccessToken()){

        return(
            <section className=" max-w-[1024px] mx-auto"> 
        <div>
            <div className=" flex gap-4 pt-4">
            <div className=" h-[300px] w-[520px] bg-red-200 rounded-2xl overflow-hidden">
                <img src={mainProduct.mainPicture} className=" h-full w-full" />
            </div>
            <div className=" flex flex-col gap-4 relative">
                <div className=" flex flex-col gap-4">
                <h1>{mainProduct.title}</h1>
                <h1>{mainProduct.fullDesc}</h1>
                </div>
                <div className=" flex gap-4 absolute bottom-[6rem]">
                    {mainProduct.productCategory.map(el=>{
                        return <h1>{el.category.name}</h1>
                    })}
                </div>
                <div className=" flex gap-4 absolute bottom-1 right-3">
                    <h1>{mainProduct.price}</h1>
                    <button onClick={()=>hdl_basket(mainProduct.id)}>add to basket</button>
                    <button>add to wishlist</button>
                    

                </div>
                {user.isAdmin && <button className=" absolute bottom-10 right-2"> change  main picture</button>}
                
            </div>

            </div>
            <div className=" mt-8">you might also like product</div>
        </div>
        </section>
        )
        


    }

    return(
        <section className=" max-w-[1024px] mx-auto"> 
        <div>
            <div className=" flex gap-4 pt-4">
            <div className=" h-[300px] w-[520px] bg-red-200 rounded-2xl overflow-hidden">
                <img src={mainProduct.mainPicture} className=" h-full w-full" />
            </div>
            <div className=" flex flex-col gap-4 relative">
                <div className=" flex flex-col gap-4">
                <h1>{mainProduct.title}</h1>
                <h1>{mainProduct.fullDesc}</h1>
                </div>
                <div className=" flex gap-4 absolute bottom-[6rem]">
                    {mainProduct.productCategory.map(el=>{
                        return <h1>{el.category.name}</h1>
                    })}
                </div>
                <div className=" flex gap-4 absolute bottom-1 right-3">
                    <h1>{mainProduct.price}</h1>
                    <button onClick={()=>hdl_basket(mainProduct.id)}>add to basket</button>
                    <button>add to wishlist</button>
                    

                </div>
                
            </div>

            </div>
            <div className=" mt-8">you might also like product</div>
        </div>
        </section>
        








    )
}