
import Modal from "../../component/modal"
import { useAdmin } from "../../hook/use_admin"

export default function AdminSideBarSubContent({title,modal,id}){
    const {isOpen,setIsOpen} = useAdmin()

    return (
    <>
    <h1 onClick={()=>{
        setIsOpen(title)
        }}
        className=" hover:underline hover:cursor-pointer"
        >{title}</h1>
    < Modal id = {id}title={title} isOpen={isOpen} onClose={()=>setIsOpen("") }  maxwidth={32}>
        
        {modal}
        </Modal>
    </>
    
    )
}