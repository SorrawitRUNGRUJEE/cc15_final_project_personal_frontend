import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentDeleteAdmin(){


    const {allAdmin,hdl_input,delete_admin,input} = useAdmin()
    const inp = [
        {id:1, label:"Enter id",name:"id" , placeholder:"type here", type:"text",},
        {id: 2, label:"Enter username",name:"username" , placeholder:"type here", type:"text",},
       
    ]

        


    return  (
    
        
        <form className=" flex flex-col gap-4 p-4 items-baseline" onSubmit={e=> {
            e.preventDefault() 
            
            delete_admin(input)
            
        }} >
                <div className=" flex gap-4">
                        <div>id</div>
                        <div>email</div>
                        <div className=" ml-16">username</div>
                    </div>

                {allAdmin.map((el,id)=>{
                    return <div className=" flex gap-4">
                        <div>{el.id}</div>
                        <div>{el.email}</div>
                        <div>{el.username}</div>
                    </div>

                })}

    {inp.map((el,id)=>{
        return(
            
        (
        <div key ={id} className=" flex flex-col gap-2 "> 
            <label >{el.label}</label>
        < Input  name={el.name} className={""} type={el.type} placeholder={el.placeholder} onChange={hdl_input}/>
        </div>))
    })}
    <button>submit</button>
    </form>
    )
}

