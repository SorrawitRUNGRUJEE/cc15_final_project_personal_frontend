import { useState } from "react";
import AdminSidebarContent from "./admin_sidebar_content";
import AdminSideBarSubContentAddAdmin from "./admin_sidebar_subconetnt_add_admin"
import AdminSidebarSubcontentDeleteAdmin from "./admin_sidebar_subconetnt_delete_admin";
import AdminSidebarSubContentAddProduct from "./admin_sidebar_subconetnt_add_product"
import AdminSidebarSubcontentUpdateProduct from "./admin_sidebar_subconetnt_update_product"
import AdminSidebarSubcontentDeleteProduct from "./admin_sidebar_subconetnt_delete_product"
import AdminSidebarSubcontentAddProductPicture from "./admin_sidebar_subconetnt_add_product_picture"
import AdminSidebarSubcontentDeleteProductPicture from "./admin_sidebar_subconetnt_delete_product_picture"
import AdminSidebarSubcontentAddProductCategory from "./admin_sidebar_subconetnt_add_product_category"
import AdminSidebarSubcontentDeleteProductCategory from "./admin_sidebar_subconetnt_delete_product_category"
import AdminSidebarSubcontentDeleteCategory from "./admin_sidebar_subconetnt_delete_category"
import AdminSidebarSubcontentUpdateCategory from "./admin_sidebar_subconetnt_update_category"
import AdminSidebarSubcontentAddCategory from "./admin_sidebar_subconetnt_add_category"
import { useAuth } from "../../hook/use_auth"
export default function AdminSidebar() {
  const { user } = useAuth()

  const [isShow, setIsShow] = useState("")
  const adminContent = [
    {
      title: "add admin",
      modal: <AdminSideBarSubContentAddAdmin />
    },
    {
      title: "delete admin",
      modal: < AdminSidebarSubcontentDeleteAdmin />
    },
  ]
  const productContent = [
    { title: "add product", modal: <AdminSidebarSubContentAddProduct /> },
    {
      title: "update product", modal: < AdminSidebarSubcontentUpdateProduct />
    },
    {
      title: "delete product", modal: < AdminSidebarSubcontentDeleteProduct />
    },
    {
      title: "add product's picture", modal: < AdminSidebarSubcontentAddProductPicture />
    },
    {
      title: "delete product's picture", modal: < AdminSidebarSubcontentDeleteProductPicture />
    },
    {
      title: "add product's category", modal: < AdminSidebarSubcontentAddProductCategory />
    },
    {
      title: "delete product's category", modal: < AdminSidebarSubcontentDeleteProductCategory />
    }
  ]
  const categoryContent = [
    { title: "add category", modal: < AdminSidebarSubcontentAddCategory /> },
    {
      title: "update category", modal: < AdminSidebarSubcontentUpdateCategory />
    },
    {
      title: "delete category", modal: < AdminSidebarSubcontentDeleteCategory />
    },
  ]
  return (
    <div className=" flex flex-col gap-4 p-4 bg-slate-950 h-[100vh] min-w-[25vh] ">
      {user.isSuperAdmin &&
        <AdminSidebarContent
          id={1}
          title={"admin"}
          isShow={isShow}
          content={adminContent}
          open={() => setIsShow("admin")}
          close={() => setIsShow("")}
        />}
      <AdminSidebarContent
        id={2}
        title={"product"}
        isShow={isShow}
        content={productContent}
        open={() => setIsShow("product")}
        close={() => setIsShow("")}
      />
      <AdminSidebarContent
        id={3}
        title={"category"}
        isShow={isShow}
        content={categoryContent}
        open={() => setIsShow("category")}
        close={() => setIsShow("")}
      />



    </div>
  );
}
