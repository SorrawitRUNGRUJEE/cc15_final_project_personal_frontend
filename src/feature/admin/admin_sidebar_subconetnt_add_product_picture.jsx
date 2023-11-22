
import Input from "../../component/input";
import { useAdmin } from "../../hook/use_admin";
import { useAuth } from "../../hook/use_auth";
import Loading from "../../component/loading"
export default function AdminSidebarSubcontentAddProductPicture() {
  const {
    hdl_input,
    input,
    add_product_photo,
    allProduct,
    setIsOpen,
    setInput,
    file,
    hdl_product_photo,
    allPicture,
    setFile
  } = useAdmin();
  const { loading } = useAuth()
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

  ];

  return (
    <>
      {loading && <Loading />}
      <div>

        <div className=" flex">
          <form
            className=" flex flex-col gap-4 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData()
              if (file) formData.append("productPicture", file)
              add_product_photo(input, formData)



            }
            }
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
                    isMultiple={el.isMultiple}
                  />

                </div>

              );
            })}
            <div className=" flex flex-col gap-2">
              <label>insert the product picture</label>
              <input
                className="text-slate-400 bg-"
                onChange={e => {
                  for (let i of e.target.files) {
                    hdl_product_photo(i)

                  }

                }}
                type="file"
                multiple
              />
            </div>

            <div className=" flex gap-2 hover:cursor-pointer hover:underline">
              <button className="text-white bg-green-800 px-4 py-1 rounded-md" >submit</button>
              <button
                className="text-white bg-red-800 px-4 py-1 rounded-md"
                type="button"
                onClick={() => {
                  setIsOpen("");
                  setInput({});
                  setFile([])
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
                    <div className=" mb-2 min-w-[60px] text-white border-solid-black border flex justify-center items-center">
                      <h1>{el.id}</h1>
                    </div>
                    <div className=" mb-2 min-w-[60px]  bg-slate-400 text-black flex justify-center items-center">
                      <h1>{el.title}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            {file.length > 0 && <div>

              {file.map(el => {
                console.log(el)
                return (
                  <img src={URL.createObjectURL(el)} alt="picture" className=" max-h-[200px] mb-4 mx-4 " />
                )
              })}
            </div>}
          </div>

        </div>
      </div>
    </>

  );
}
