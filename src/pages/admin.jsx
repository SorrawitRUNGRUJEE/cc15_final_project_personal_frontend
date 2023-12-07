import { useState } from "react";

import AdminSidebar from "../feature/admin/admin_sidebar";
import { useAdmin } from "../hook/use_admin";

export default function Admin() {
  const { approveOrder, unapproveOrder,hdl_approve_payment,
    hdl_reject_payment, } = useAdmin();

  return (
    <div className=" flex">
      <div className=" bg-red-200 ">
        <AdminSidebar />
      </div>
      {unapproveOrder &&
        <div className=" mx-auto ">
        <div>
          <label> authenticate payment</label>
          {unapproveOrder.map((el) => {
            return (
              <div className=" flex gap-2 item-center">
                <div>
                  <label>oreder id</label>
                  <h1>{el.id}</h1>
                </div>
                <div>
                  <label>user id</label>
                  <h1>{el.userId}</h1>
                </div>
                <div>
                  <label>total price</label>
                  <h1>{el.totalPrice}</h1>
                </div>

                <div>
                  <label>payment slip image</label>
                  <div className=" h-[4rem] w-[6rem] hover:h-[10rem] hover:w-[12rem] duration-500">
                    <img src={el.paymentSlip} className=" h-full w-full" />
                  </div>
                </div>

                <div className=" flex flex-col gap-4">
                  <button className=" p-1.5 rounded-full bg-green-300" onClick={()=>{
                      hdl_approve_payment(el.id)
                  }}> approve</button>
                  <button className=" p-1.5 rounded-full bg-red-300" onClick={()=>{
                    hdl_reject_payment(el.id)
                  }}> denied</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      }
      
    </div>
  );
}
