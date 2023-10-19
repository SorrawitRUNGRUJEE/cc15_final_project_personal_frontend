import Input from "../../component/input"
import {useAdmin} from "../../hook/use_admin"
export default function AdminSidebarSubcontentAddAdmin(){

    const {hdl_input,add_admin,input} = useAdmin()
    const inp = [
        {id:1, label:"Enter e-mail",name:"email" , placeholder:"type here", type:"text",},
        {id: 2, label:"Enter username",name:"username" , placeholder:"type here", type:"text",},
        {id: 3, label:"Enter password",name:"password" , placeholder:"type here", type:"text",},
        {id: 4, label:"confirm Password",name:"confirmPassword" , placeholder:"type here", type:"text",},
    ]

        


    return  (
        <form className=" flex flex-col gap-4 p-4" onSubmit={e=> {
            e.preventDefault() 
            add_admin(input)
            
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