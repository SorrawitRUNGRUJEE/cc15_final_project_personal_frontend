import { useStore } from "../../hook/use_Store"
import { useNavigate } from "react-router-dom"
export default function StoreSidebarContent(){
    const {allCategory,setExploreResult,exploreResult,set_explore_display,} = useStore()
    const navigate =  useNavigate()
    return(

        <>
         <label className=" mb-4">what shall we explore today  ?</label>
        <select className=" mb-4" size={5} onChange={(e)=>{
            setExploreResult(+e.target.value)
            set_explore_display(+e.target.value)
            
        }}>
        {allCategory.map((el,id)=>{
            return <option key={id} value={el.id}>{el.name}</option>
        })}
        </select>
        <button className=" p-1.5 bg-red-300 rounded-lg" onClick={()=>{
            if(exploreResult == 0){
                set_explore_display(1)
            }
            navigate(`/explore/${exploreResult}`)
        
        }}> begin your journey!</button>

     
        </>
    )

}