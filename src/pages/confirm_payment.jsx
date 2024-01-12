import { useTransaction } from "../hook/use_transaction";

export default function ConfirmPayment() {
  const { order,paymentSlip,setPaymentSlip,hdl_submit_payment} = useTransaction();
  
  if(!order.order && !order.product) return <h1>it's looking empty here...</h1>
  return (
    
    <>
    {order.order && order.product &&
    <section className=" max-w-1024 mx-auto " >
    <div className="bg-gradient-to-r from-sky-800 to-indigo-950 w-full min-h-screen h-full  py-4 relative text-white flex justify-center ">
  <div className="bg-gray-200 flex flex-col items-center  justify-center w-fit mx-auto   p-4 text-black">
  <h1>please submit your payment slip</h1>
  <h1>total price : {order.order.totalPrice}</h1>
  <div>
  <h1> your order</h1>
      {order.product.map(el=>{
          return(
              <div className=" flex gap-4 mt-4">
                  <div className=" h-[8rem] w-[10rem]">
                      <img  src={el.product.secondPicture} className=" h-full w-full"/>
                  </div>
                  <div className="flex  justify-center items-center">
                      <h1>{el.product.title}</h1>
                  </div>
              </div>

          )
      })}
  </div>
  </div>
  <div className=" absolute top-4 right-20 flex flex-col items-center gap-4">
  <label>upload your slip here</label>
  <input type="file" onChange={e=>{
      setPaymentSlip(e.target.files[0])

  }}/>
  {paymentSlip&& 
  <div className=" h-[10rem] w-[12rem]">

      <img className="h-full w-full" src={URL.createObjectURL(paymentSlip)}/>
  </div>
  }
  <button
  onClick={()=>{
      hdl_submit_payment()
  }}
  >submit payment slip</button>
  </div>
 

</div>
</section>

}
</>
      
  );
}
