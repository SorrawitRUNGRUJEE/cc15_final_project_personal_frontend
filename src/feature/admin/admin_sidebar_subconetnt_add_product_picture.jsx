
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
  const {loading} = useAuth()
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
            if(file)  formData.append("productPicture",file)
            add_product_photo(input,formData)
          
          
          
        }
      }
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
                  isMultiple={el.isMultiple}
                  />
             
              </div>

);
})}
           <div className=" flex flex-col"> 
                <label>insert the product picture</label>
                <input onChange={e=>{
                  for(let i of e.target.files){
                    hdl_product_photo(i)
                    
                  }
                  
                }}
                type="file"
                multiple  
                />
              </div>

          <div className=" flex gap-2 hover:cursor-pointer hover:underline">
            <button >submit</button>
            <button
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
                  <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                    <h1>{el.id}</h1>
                  </div>
                  <div className=" mb-2 min-w-[60px]  border-solid-black border flex justify-center items-center">
                    <h1>{el.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
          {file.length > 0 &&  <div>
        
        {file.map(el=>{
            console.log(el)
          return( 
            
            
            <img src={URL.createObjectURL(el)} alt="picture" className=" max-h-[200px] mb-4 mx-4"/>
            
            )})}
        </div>}
        </div>
       
      </div>
    </div>
              </>
            
  );
}
