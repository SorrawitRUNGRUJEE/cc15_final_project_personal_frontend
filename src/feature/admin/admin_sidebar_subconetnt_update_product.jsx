import { useAdmin } from "../../hook/use_admin"
import Input from "../../component/input"
export default function AdminSidebarSubcontentUpdateProduct(){
    const {hdl_input,input,update_product} = useAdmin()
    const inp = [
        {id:1, label:"Enter the game id",name:"id" , placeholder:"type here", type:"text",},
        {id:2, label:"Enter the game title",name:"title" , placeholder:"type here", type:"text",},
        {id:3, label:"Enter the game new full description ",name:"fullDesc" , placeholder:"type here (optional)", type:"text",},
        {id:4, label:"Enter the game new brief description",name:"briefDesc" , placeholder:"type here (optional)", type:"text",},
        {id:5, label:"Enter the game new price",name:"price" , placeholder:"type here (optional)", type:"text",},
    ]

        


    return  (
        <form className=" flex flex-col gap-4 p-4" onSubmit={e=> {
            e.preventDefault() 
            update_product(input)
            
            }} >

    {inp.map((el,id)=>{
        return(
        (<div key ={id} className=" flex flex-col gap-2 "> 
            <label >{el.label}</label>
        < Input  name={el.name} className={""} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
        </div>))
    })}
    <button>submit</button>
    </form>
    )
}

