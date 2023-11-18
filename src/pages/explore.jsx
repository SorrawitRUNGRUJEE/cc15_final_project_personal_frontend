import Modal from "../component/modal"
import SecondaryModal from "../component/seconday_modal"
import ExploreChangeSecondPicture from "../feature/explore/explore_change_second_picture"
import { useStore } from "../hook/use_Store"
import { useAuth } from "../hook/use_auth"
export default function Explore(){
  const {allCategory,
    setExploreResult,
    exploreResult,
    exploreDisplay,set_explore_display,
    isOpen,
    setIsOpen,
    fetch_secondary_picture,
  } = useStore()

  
  const exploreContent = (exploreDisplay?.productCategory)
  const {user} =useAuth()
  
  if(exploreResult == 0){
    setExploreResult(1)
  }
    return(<div className="flex"> 
    <div className=" w-[10vw] h-[100vh] bg-gray-300 p-3">
      <label className=" text-xs"> How about these ?</label>

    {allCategory.map((el,id)=>{
            return (
                <div key={id} className="my-2 p-0.5 flex text-center justify-center rounded-md bg-gray-200 hover:underline hover:cursor-pointer text-gray-600 hover:text-gray-950 text-xs"
                onClick={()=>{
                    setExploreResult(el.id)
                    set_explore_display(el.id)
                    }}>
                    <h4>{el.name}</h4>
                </div>
            )
        })}
    </div>
      {exploreResult == 0?
    
        <div className=" p-8">

          <h1>it's quiet around here, choose something!</h1> 
        </div>
      
    
      :  

      <div className=" w-[90vw] bg-gray-200 flex  flex-col  p-8">
        <SecondaryModal  isOpen={isOpen} onClose={()=>{
          setIsOpen(false)
        }}>
          <ExploreChangeSecondPicture/>
        </SecondaryModal>
        {exploreContent?.map((el,id)=>{
          return<div key={id} className=" border border-black border-solid  flex  flex-col p-2 min-w-full gap-2  mb-2">
            <div className="flex"> 
            <div className=" max-w-[160px] max-h-[100px] bg-gray-300">
            <img src={el.product.mainPicture} className="  w-full h-full"/>
            </div>
            <div className=" flex flex-col p-2">
              <h1>{el.product.title}</h1>
              <h1>{el.product.fullDesc}</h1>
              <h1>{el.product.price} THB</h1>
          </div>
          </div>
          <div className=" flex gap-4">
          <button className=" bg-slate-400 px-2 py-1 rounded-xl">add to cart</button>
          <button className=" bg-slate-400 px-2 py-1 rounded-xl"> add to wishlist</button>
          {user?.isAdmin && 
            <button className=" bg-slate-400 px-2 py-1 rounded-xl"
            onClick={()=>{
              fetch_secondary_picture(el.product.id)
              setIsOpen(true)}}
            > change secondary picture</button>
          }
            </div> 
        </div>

    
        })}
      </div>
      }
  </div>
  )
}