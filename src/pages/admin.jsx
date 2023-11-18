import { useState } from "react";

import AdminSidebar from "../feature/admin/admin_sidebar";

export default function Admin() {

  return (
    <div className=" flex">
      <div className=" bg-red-200 ">

        < AdminSidebar />
      </div>
     

      <div className=" mx-auto ">
        <div>show data 1</div>
        <div>show data 2</div>
        <div>show data 3</div>
      </div>
    </div>
  );
}
