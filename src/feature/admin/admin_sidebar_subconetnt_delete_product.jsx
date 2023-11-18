import { useAdmin } from "../../hook/use_admin"
import Input from "../../component/input"
export default function AdminSidebarSubcontentDeleteProduct(){
    const {setIsOpen,hdl_input,input,delete_product,allProduct,setInput} = useAdmin()
    const inp = [
        {id:1, label:"Enter the game id",name:"id" , placeholder:"type here", type:"text",},
        {id:2, label:"Enter the game title",name:"title" , placeholder:"type here", type:"text",},  
    ]
    return  (<div className=" flex  ">
        <form className=" flex flex-col gap-4 p-4" onSubmit={e=> {
            e.preventDefault() 
            delete_product(input)
            
        }} >

    {inp.map((el,id)=>{
        return(
            (<div key ={id} className=" flex flex-col gap-2 "> 
            <label >{el.label}</label>
        < Input  name={el.name} className={""} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
        </div>))
    })}
    <div className=" flex gap-2 hover:cursor-pointer hover:underline">
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
    <div>

    {allProduct.map((el,id)=>{ 
        return <div key={id} className=" flex gap-2  ">
            <div className=" mb-2 min-w-[60px] px-4  border-solid-black border flex justify-center items-center gap-4 ]">
            <h1>id : {el.id}</h1>
            <h1>title : {el.title}</h1>
            </div>
         
           
         
            
        </div>
    })}
    </div>
    </div>
    )
}