
import Modal from "../../component/modal"
import { useAdmin } from "../../hook/use_admin"

export default function AdminSideBarSubContent({title,modal,id}){
    const {isOpen,setIsOpen} = useAdmin()

    return (
    <>
    <h1 onClick={()=>{
        setIsOpen(title)
        }}>{title}</h1>
    < Modal id = {id}title={title} isOpen={isOpen} onClose={()=>setIsOpen("") }>
        
        {modal}
        </Modal>
    </>
    
    )
}