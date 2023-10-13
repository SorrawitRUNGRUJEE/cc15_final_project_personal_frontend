import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Admin from "../pages/admin";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProductDetail from "../pages/product_detail";
import StoreFront from "../pages/store_front";
import Explore from "../pages/explore";
import Wishlist from "../pages/wishlist";
import Profile from "../pages/profile";
import PurchaseHistory from "../pages/purchase_history";
import ProfileHeader from "../layout/profileHeader";
import RegisterFinal from "../pages/register_final";
import Basket from "../pages/basket";
import ConfirmPayment from "../pages/confirm_payment";
import PaymentAuthen from "../pages/paymentAuthen";
import Unauthorized from "../pages/unauthorized";
import NotAdminRedirect from "../feature/redirect/not_admin_redirect";
import NotLoginRedirect from "../feature/redirect/not_login_redirect";
const router = createBrowserRouter([
  { path: "/login", element: (
  <>
  <Login />
  <Footer />
  </>
  ) },
  { path: "/admin", element: (
    <>
    <NotAdminRedirect>
    <Admin />
    </NotAdminRedirect>
    </>
  ) },
  { path: "/register", element: (<>
    <RegisterFinal />
    <Footer /> 
  </>
    )
  },
  {
    path: "/profile",
    element: (
      <NotLoginRedirect>
        <ProfileHeader />
        <Outlet />
        <Footer />
      </NotLoginRedirect>
    ),
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/profile/wishlist", element: <Wishlist /> },
      { path: "/profile/purchase", element: <PurchaseHistory /> },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <StoreFront /> },
      { path: "/product", element: <ProductDetail /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
  {
    path: "/transaction",
    element: (
      <>
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/transaction/basket", element: <Basket /> },
      { path: "/transaction/confirm", element: <ConfirmPayment /> },
      { path: "/transaction/authen", element: <PaymentAuthen /> },
    ],
  },
  {path:"/unauth",element:< Unauthorized />},
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
