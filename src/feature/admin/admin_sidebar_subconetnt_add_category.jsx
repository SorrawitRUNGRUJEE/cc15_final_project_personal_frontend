
import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentAddCategory() {
  const { hdl_input, add_category, input, setInput, setIsOpen } = useAdmin()
  const inp = [
    { id: 1, label: "Enter the new Category", name: "name", placeholder: "Type here...", type: "text", },

  ]

  return (
    <form className=" flex flex-col gap-4 p-4 " onSubmit={e => {
      e.preventDefault()
      add_category(input)

    }} >

      {inp.map((el, id) => {
        return (
          (<div key={id} className=" flex flex-col gap-2  ">
            <label >{el.label}</label>
            < Input name={el.name} className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"} type={el.type} placeholder={el.placeholder} onChange={hdl_input} />
          </div>))
      })}
      <div className=" flex gap-2 hover:cursor-pointer hover:underline justify-center items-center">
        <button
          className="text-white bg-green-800 px-4 py-1 rounded-md"
        >submit</button>
        <button
          type="button"
          className="text-white bg-red-800 px-4 py-1 rounded-md"
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