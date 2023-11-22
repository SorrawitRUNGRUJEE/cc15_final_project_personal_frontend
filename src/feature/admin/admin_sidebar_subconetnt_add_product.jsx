import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentAddProduct() {
  const { hdl_input, add_product, input, setInput, setIsOpen } = useAdmin()
  const inp = [
    { id: 1, label: "Enter the game's title", name: "title", placeholder: "type here", type: "text", },
    { id: 2, label: "Enter the game's full description", name: "fullDesc", placeholder: "type here", type: "text", },
    { id: 3, label: "Enter the game's brief description", name: "briefDesc", placeholder: "type here", type: "text", },
    { id: 4, label: "Enter the game's price", name: "price", placeholder: "type here", type: "text", },
  ]




  return (
    <form className=" flex flex-col gap-4 p-4" onSubmit={e => {
      e.preventDefault()
      add_product(input)

    }} >

      {inp.map((el, id) => {
        return (
          (<div key={id} className=" flex flex-col gap-2 ">
            <label >{el.label}</label>
            < Input name={el.name} className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
          </div>))
      })}
      <div className=" flex gap-2 hover:cursor-pointer hover:underline mx-auto">
        <button className="text-white bg-green-800 px-4 py-1 rounded-md">submit</button>
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
  )
}