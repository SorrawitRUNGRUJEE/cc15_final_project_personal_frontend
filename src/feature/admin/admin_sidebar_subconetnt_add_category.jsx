
import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentAddCategory(){
    const {hdl_input,add_category,input,setInput,setIsOpen} = useAdmin()
    const inp = [
        {id:1, label:"Enter the new Category",name:"name" , placeholder:"type here", type:"text",},

    ]

        


    return  (
        <form className=" flex flex-col gap-4 p-4" onSubmit={e=> {
            e.preventDefault() 
            add_category(input)
            
            }} >

    {inp.map((el,id)=>{
        return(
        (<div key ={id} className=" flex flex-col gap-2 "> 
            <label >{el.label}</label>
        < Input  name={el.name} className={""} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
        </div>))
    })}  <div className=" flex gap-2 hover:cursor-pointer hover:underline">
    <button>submit</button>
    <button
            type="button"
            onClick={() => {
              setIsOpen("");
              setInput({});
            }}
          >
            cancel
          </button>
    </div>
    </form>
    )
        
    
}