import { useAdmin } from "../../hook/use_admin";
import Input from "../../component/input";
export default function AdminSidebarSubcontentUpdateProduct() {
  const { hdl_input, input, update_product, allProduct, setIsOpen, setInput } =
    useAdmin();
  const inp = [
    {
      id: 1,
      label: "Enter the game id",
      name: "id",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 2,
      label: "Enter the game title",
      name: "title",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 5,
      label: "Enter the game new price",
      name: "price",
      placeholder: "type here (optional)",
      type: "text",
    },
    {
      id: 4,
      label: "Enter the game new brief description",
      name: "briefDesc",
      placeholder: "type here (optional)",
      type: "text",
    },
  ];

  return (
    <div className=" flex  ">
      <form
        className=" flex flex-col gap-4 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          update_product(input);
        }}
      >
        {inp.map((el, id) => {
          return (
            <div key={id} className=" flex flex-col gap-2 ">
              <label>{el.label}</label>
              <Input
                className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"}
                name={el.name}
                type={el.type}
                placeholder={el.placeholder}
                onChange={hdl_input}
              />
            </div>
          );
        })}
        <label>Enter the game Full description</label>
        <textarea
          className={"px-4 bg-slate-600 border-none py-2 text-white outline-none"}
          name="fullDesc"
          placeholder="type here"
          onChange={hdl_input}
          rows={10}

        >
          hello
        </textarea>
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
        {allProduct.map((el, id) => {
          return (
            <div key={id} className=" flex gap-2">
              <div className=" mb-2 min-w-[60px] border-solid-black border flex justify-center items-center text-white">
                <h1>{el.id}</h1>
              </div>
              <div className=" mb-2 min-w-[60px] border-solid-black  bg-slate-400 text-black flex justify-center items-center">
                <h1>{el.title}</h1>
              </div>
              <div className=" border-2 border-solid-black flex flex-col mb-2 p-0.5 pl-2 max-w-[200px] min-w-[200px] py-2 text-black bg-slate-200 ">
                <h1 className=" text-xs text-left break-words">
                  full description : {el.fullDesc}
                </h1>
                <br></br>
                <h1 className=" text-xs text-left break-words">
                  brief description : {el.briefDesc}
                </h1>
                <br />
                <h1 className=" text-xs text-left">price : {el.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
