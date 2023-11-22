import { useAuth } from "../hook/use_auth";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useStore } from "../hook/use_Store";
export default function ProductCard({
  image,
  briefDesc,
  price,
  title,
  className,
  id,
  category,
  setIsOpen
}) {
  const { hdl_main_product,hdl_edit_photo,hdl_basket } = useStore();
  const navigate = useNavigate();
  
  if (getAccessToken()) {
    const {
      user: { isAdmin },
    } = useAuth();
    if (isAdmin) {
      return (
        <div
          className={`bg-white p-4  flex w-[640px] justify-between relative ${className}`}
        >
          <div className="flex gap-2">
          <div
          className=" bg-blue-200 h-[6rem] w-[8rem] hover:h-[10rem] hover:w-[12rem] duration-1000 hover:cursor-pointer "
          onClick={() => {
            navigate(`/product/${id}`);
            hdl_main_product(id);
          }}
        >
          <img src={image} alt="" className=" w-full h-full" />
        </div>
            <div className=" flex flex-col items-start justify-center  px-2">
              <div>
                <h1>{title}</h1>
                <h1>{briefDesc}</h1>
              </div>
              <div>
                {category.map(el=> el.category.name)}
              </div>
            </div>
          </div>
          <button className=" absolute  top-3 right-3" onClick={()=>{
            hdl_edit_photo(id)
            setIsOpen(true)
            }}>
            {" "}
            set secondary photo
          </button>
        </div>
      );
    }
  }

  return (
    <div
      className={`bg-white p-4  flex w-[640px] justify-between relative ${className}`}
    >
      <div className="flex gap-2">
        <div
          className=" bg-blue-200 h-[6rem] w-[8rem] hover:h-[10rem] hover:w-[12rem] duration-1000 hover:cursor-pointer "
          onClick={() => {
            navigate(`/product/${id}`);
            hdl_main_product(id);
          }}
        >
          <img src={image} alt="" className=" w-full h-full" />
        </div>
        <div className=" flex flex-col items-start justify-center gap-2 px-2">
              <div>
                <h1>{title}</h1>
                <h1>{briefDesc}</h1>
              </div>
              <div className=" flex p-1.5 gap-2 "> 
                {category.map(el=> <h1>{el.category.name}</h1>)}
              </div>
            </div>
      </div>
      <button className=" absolute  top-3 right-3"> add to wish list</button>
      <div className="  flex gap-4 items-end absolute bottom-2 right-2">
        <h1>{price}</h1>
        <button className=" p-1.5 bg-green-500 rounded-l" onClick={()=>hdl_basket(id)}>add to basket</button>
      </div>
    </div>
  );
}
