import Input from "../../component/input"
export default function AdminSidebarSubcontentAddProductPicture(){
    const input = [
        {label:"Enter e-mail",name:"email" , placeholder:"type here", type:"text",},
        {label:"Enter username",name:"username" , placeholder:"type here", type:"text",},
        {label:"Enter password",name:"password" , placeholder:"type here", type:"text",},
        {label:"confirm Password",name:"confirmPassword" , placeholder:"type here", type:"text",},

    ]


    return  (
        <form className=" bg-blue-400" >

    {input.map((el,id)=>{
        return(
        (<div>
            <label className=" bg-green-200">{el.label}</label>
        < Input key ={id} name={el.name} className={""} type={el.type} />
        </div>))
    })}
    </form>
    )
}