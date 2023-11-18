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
                name={el.name}
                className={""}
                type={el.type}
                placeholder={el.placeholder}
                onChange={hdl_input}
              />
            </div>
          );
        })}
        <label>Enter the game Full description</label>
        <textarea
          name="fullDesc"
          placeholder="type here"
          onChange={hdl_input}
          rows={10}
          className=" border border-black"
        >
          hello
        </textarea>
        <div className=" flex gap-2 hover:cursor-pointer hover:underline">
          <button onClick={() => {}}>submit</button>
          <button
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
              <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                <h1>{el.id}</h1>
              </div>
              <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                <h1>{el.title}</h1>
              </div>
              <div className=" border-2 border-solid-black flex flex-col mb-2 p-0.5 pl-2 ">
                <h1 className=" text-xs text-left">
                  full description : {el.fullDesc}
                </h1>
                <br></br>
                <h1 className=" text-xs text-left">
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
