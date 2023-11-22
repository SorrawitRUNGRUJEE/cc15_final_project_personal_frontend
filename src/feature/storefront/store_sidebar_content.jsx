import { useStore } from "../../hook/use_Store"
import { useNavigate } from "react-router-dom"
export default function StoreSidebarContent(){
    const {allCategory,setExplore,hdl_explore_content} = useStore()
    const navigate =  useNavigate()
    return(

        <>
         <label className=" mb-4">what shall we explore today  ?</label>
        <select className=" mb-4" size={5} onChange={(e)=>{
            setExplore(+e.target.value)
            hdl_explore_content(+e.target.value)
            
        }}>
        {allCategory.map((el,id)=>{
            return <option key={id} value={el.id}>{el.name}</option>
        })}
        </select>
        <button className=" p-1.5 bg-red-300 rounded-lg" onClick={()=>{
            navigate(`/explore`)
        
        }}> begin your journey!</button>

     
        </>
    )

}