import Input from "../../component/input";
import { useAdmin } from "../../hook/use_admin";
export default function AdminSidebarSubcontentAddProductCategory() {
  const {
    hdl_input,
    input,
    add_product_category,
    allProduct,
    setIsOpen,
    setInput,
    allCategory,
  } = useAdmin();
  const inp = [
    {
      id: 1,
      label: "Enter the product's id",
      name: "productId",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 2,
      label: "Enter the product's title",
      name: "productTitle",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 3,
      label: "Enter the category's id",
      name: "categoryId",
      placeholder: "type here",
      type: "text",
    },
    {
      id: 2,
      label: "Enter the category's name",
      name: "categoryName",
      placeholder: "type here",
      type: "text",
    },
  ];

  return (
    <div>

    <div className=" flex gap-4 text-xs justify-end pr-12 mb-4">
        <h1>product's id</h1>
        <h1>product's title</h1>
        <h1>product's catgory</h1>
        <h1>category's id</h1>
        <h1>category's name</h1>
    </div>    
    <div className=" flex">
      <form
        className=" flex flex-col gap-4 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          add_product_category(input);
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
      <div className=" flex">
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
                  product's category :
                  {el.productCategory.map((el) => {
                    return <h1>{el.category.name}</h1>;
                  })}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {allCategory.map((el, id) => {
          return (
            <div key={id} className=" flex gap-2  ">
              <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                <h1>{el.id}</h1>
              </div>
              <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                <h1>{el.name}</h1>
              </div>
              
            </div>
          );
        })}
      </div>
      </div>
    </div>
    </div>
  );
}
