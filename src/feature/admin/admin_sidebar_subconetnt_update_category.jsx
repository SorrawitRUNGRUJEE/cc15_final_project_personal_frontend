import Input from "../../component/input"
import { useAdmin } from "../../hook/use_admin"
export default function AdminSidebarSubcontentUpdateCategory() {
  const { hdl_input, input, update_category, allCategory, setIsOpen, setInput } =
    useAdmin();
  const inp = [
    {
      id: 1,
      label: "Enter the category id",
      name: "id",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 2,
      label: "Enter the old category name",
      name: "name",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 2,
      label: "Enter the new category name",
      name: "newName",
      placeholder: "type here",
      type: "text",
    }
  ];

  return (
    <div className=" flex  ">
      <form
        className=" flex flex-col gap-4 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          update_category(input);
        }}
      >
        {inp.map((el, id) => {
          return (
            <div key={id} className=" flex flex-col gap-2 ">
              <label>{el.label}</label>
              <Input

                name={el.name}
                className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"}
                type={el.type}
                placeholder={el.placeholder}
                onChange={hdl_input}
              />
            </div>
          );
        })}

        <div className=" flex gap-2 hover:cursor-pointer hover:underline">
          <button
            className="text-white bg-green-800 px-4 py-1 rounded-md"
            onClick={() => { }}>submit</button>
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
        {allCategory.map((el, id) => {
          return (
            <div key={id} className=" flex gap-2  ">
              <div className=" mb-2 min-w-[60px] text-white  border-solid-black border flex justify-center items-center">
                <h1>{el.id}</h1>
              </div>
              <div className=" mb-2 min-w-[60px] px-4 bg-slate-300 text-black  border-solid-black border flex justify-center items-center">
                <h1>{el.name}</h1>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}