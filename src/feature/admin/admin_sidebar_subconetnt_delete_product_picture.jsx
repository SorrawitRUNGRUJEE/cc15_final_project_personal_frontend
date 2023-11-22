import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentDeleteProductPicture() {
  const { setIsOpen, hdl_input, input, delete_product_photo, allPicture, setInput, allProduct } = useAdmin()
  const inp = [
    { id: 1, label: "Enter the product id", name: "id", placeholder: "type here", type: "text", },
    { id: 2, label: "Enter the product title", name: "title", placeholder: "type here", type: "text", },
    { id: 3, label: "Enter the picure's id", name: "pictureId", placeholder: "type here", type: "text", },
  ]
  return (<div className=" flex  ">

    <form className=" flex flex-col gap-4 p-4" onSubmit={e => {
      e.preventDefault()
      delete_product_photo(input)
    }} >

      {inp.map((el, id) => {
        return (
          (<div key={id} className=" flex flex-col gap-2 ">
            <label >{el.label}</label>
            < Input
              name={el.name} className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
          </div>))
      })}
      <div className=" flex gap-2 hover:cursor-pointer hover:underline">
        <button
          className="text-white bg-green-800 px-4 py-1 rounded-md"
        >submit</button>
        <button
          className="text-white bg-red-800 px-4 py-1 rounded-md"
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


      {allProduct.map((el, id) => {
        return (
          <div key={id} className=" flex gap-2  ">
            <div className=" mb-2 min-w-[60px] text-white border-solid-black border flex justify-center items-center">
              <h1>{el.id}</h1>
            </div>
            <div className=" mb-2 min-w-[60px] py-1 px-2  text-black bg-slate-400  flex justify-center items-center">
              <h1>{el.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
    <div>

      {allPicture.map((el, id) => {
        return <div key={id} className=" flex gap-2  ">
          <div className=" mb-2 min-w-[60px] px-4  border-solid-black border flex justify-center items-center gap-4 ]">
            <h1> picture id: {el.id}</h1>
            <h1> product id: {el.productId}</h1>
            <img src={el.picture} className=" max-h-[100px] max-w-[100px]" />
          </div>




        </div>
      })}

    </div>

  </div>
  )
}