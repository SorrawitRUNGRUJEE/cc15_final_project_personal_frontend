import { useTransaction } from "../hook/use_transaction";
import {useAuth} from "../hook/use_auth"
import {INCREMENT,DECREMENT} from "../constant/multiplier"
import { useNavigate } from "react-router-dom";
export default function Basket() {
    const navigate = useNavigate()
  const { basketContent, hdl_multiplier,totalPrice,hdl_single_basket_delete,hdl_all_basket_delete,hdl_order } = useTransaction();
  const {user}= useAuth()
  const hdl_order_submit =  async (e) =>{
    e.preventDefault()
    await hdl_order().then(res=> navigate("/transaction/confirm")).catch(err=> alert(err.response.data.msg))
  }
    if(basketContent){
        if(basketContent.length == 0){
         return (<div className="bg-gradient-to-r from-sky-800 to-indigo-950 w-full h-screen py-4 text-white">
                <h1>it's looking empty here....</h1>
         </div>
            
         )   
        }
    }

  return (

    <div className="bg-gradient-to-r from-sky-800 to-indigo-950 w-full min-h-screen h-full py-4 ">

      <section className=" max-w-1024 mx-auto">
        <div className=" bg-slate-600 w-[720px] mx-auto flex flex-col items-center gap-4 relative pt-20 pb-40 ">
        <h1 className=" text-3xl text-white absolute  top-5 left-4">Here's your cart, {user.username}</h1>
          {basketContent.map((el) => {
            return (
              <div className=" relative flex bg-slate-500  text-white items-center gap-4 py-4 px-4 w-[660px] rounded-md">
                <div className=" h-[8rem] w-[10rem] rounded-2xl overflow-hidden">
                  <img
                    src={el.product.secondPicture}
                    alt=""
                    className=" w-full h-full"
                  />
                </div>
                <div className=" flex flex-col gap-4">
                  <h1>{el.product.title}</h1>
                  <div>
                    <label>amount:{el.multiplier}</label>
                    <div className=" flex gap-4">
                      <label>Quantity:</label>
                      <div className=" flex gap-4">
                        <div className=" bg-white px-2 rounded-full text-black hover:cursor-pointer" onClick={()=>hdl_multiplier(el.product.id,DECREMENT)}>-</div>
                        <div className=" bg-white px-2 rounded-full text-black hover:cursor-pointer" onClick={()=>hdl_multiplier(el.product.id,INCREMENT)}>+</div>
                      </div>
                    </div>
                  </div>
                </div>
                    <button className=" absolute top-4 right-6 hover:underline " onClick={()=>{
                        hdl_single_basket_delete(el.product.id)
                    }}>remove from cart</button>
                    <label className=" absolute bottom-4 right-4 bg-green-500 rounded-md p-1.5">price : {el.product.price * el.multiplier} THB</label>
              </div>
            );
          })}
        <div className=" p-4 bg-slate-300 absolute bottom-16 right-10 w-[20rem] flex justify-center rounded-2xl">
            <h1>Total price : {totalPrice}</h1>
            
        </div>

          <div className="flex gap-11 absolute bottom-3 right-12">
          <button className=" py-1 px-2 bg-slate-300 rounded-xl" onClick={hdl_order_submit}>proceed to payment</button>
          <button className=" py-1 px-2 bg-slate-300 rounded-xl" onClick={()=>hdl_all_basket_delete()}>clear basket</button>
          </div>

          
        </div>
      </section>
    </div>
    
  );
}
