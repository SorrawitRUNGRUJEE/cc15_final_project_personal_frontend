import triangle from "../../assets/triangle.svg.png";
import AdminSideBarSubContent from "./admin_sidebar_sub_content";
export default function AdminSidebarContent({ title, content ,isShow,open,close}) {
    
  
  return (
<>
      <div className=" flex gap-4 justify-start items-center" >
        
        <img
            onClick={title == isShow? close:open }
          src={triangle}
          alt="triangle"
          className={` hover:cursor-pointer max-h-4 max-w-2 ${isShow == title? "rotate-180" : "rotate-90 transiti"}`}
          />
          <h1 onClick={title == isShow? close:open} className=" hover:cursor-pointer">{title}</h1>
      </div>
      <div className={isShow == title? " text-red-400" : "hidden transition-opacity"}>
       {content.map((el,id)=>{
        return < AdminSideBarSubContent id={id} title = {el.title} modal={el.modal}/>
            
      

       })}
      </div>
</>
  );
}
