import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentAddProduct(){
    const {hdl_input,add_product,input} = useAdmin()
    const inp = [
        {id:1, label:"Enter the game's title",name:"title" , placeholder:"type here", type:"text",},
        {id: 2, label:"Enter the game's full description",name:"fullDesc" , placeholder:"type here", type:"text",},
        {id: 3, label:"Enter the game's brief description",name:"briefDesc" , placeholder:"type here", type:"text",},
        {id: 4, label:"Enter the game's price",name:"price" , placeholder:"type here", type:"text",},
    ]

        


    return  (
        <form className=" flex flex-col gap-4 p-4" onSubmit={e=> {
            e.preventDefault() 
            add_product(input)
            
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