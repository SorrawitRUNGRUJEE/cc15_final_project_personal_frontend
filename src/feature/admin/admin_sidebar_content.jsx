import triangle from "../../assets/triangle.svg.png";
import AdminSideBarSubContent from "./admin_sidebar_sub_content";
export default function AdminSidebarContent({ title, content, isShow, open, close }) {


  return (
    <>
      <div onClick={title == isShow ? close : open}
        className=" flex gap-4 justify-start items-center text-white" >
        <span
          className={`material-symbols-outlined text-[36px]  hover:cursor-pointer ${isShow == title ? "rotate-90 transition text-yellow-500" : "rotate-[90] transition"} `}>
          arrow_right
        </span>
        <h1 onClick={title == isShow ? close : open} className={`hover:cursor-pointer hover:text-yellow-600 ${isShow == title ? " text-yellow-500" : "text-white"}`}>{title}</h1>
      </div>
      <div className={isShow == title ? "" : "hidden transition-opacity"}>
        {content.map((el, id) => {
          return < AdminSideBarSubContent id={id} title={el.title} modal={el.modal} />
        })}
      </div>
    </>
  );
}
