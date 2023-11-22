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
import RegisterFinal from "../pages/register_final";
import Basket from "../pages/basket";
import ConfirmPayment from "../pages/confirm_payment";
import PaymentAuthen from "../pages/paymentAuthen";
import Unauthorized from "../pages/unauthorized";
import NotAdminRedirect from "../feature/redirect/not_admin_redirect";
import NotLoginRedirect from "../feature/redirect/not_login_redirect";
import RedirectIfLogin from "../feature/redirect/redirect_if_login";
import Logout from "../pages/log_out";
import AdminContextProvider from "../context/admin_context";
import StoreContextProvider from "../context/storefront_context";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <RedirectIfLogin>
          <Login />
          <Footer />
        </RedirectIfLogin>
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <NotAdminRedirect>
          <AdminContextProvider>
            <Header />
            <Admin />
          </AdminContextProvider>
        </NotAdminRedirect>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterFinal />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <NotLoginRedirect>
        <Header />
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
        <StoreContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </StoreContextProvider>
      </>
    ),
    children: [
      { path: "/", element: <StoreFront /> },
      { path: "/product/:productId", element: <ProductDetail /> },
      { path: "/explore/", element: <Explore /> },
    ],
  },
  {
    path: "/transaction",
    element: (
      <>
        <NotLoginRedirect>
          <Outlet />
          <Footer />
        </NotLoginRedirect>
      </>
    ),
    children: [
      { path: "/transaction/basket", element: <Basket /> },
      { path: "/transaction/confirm", element: <ConfirmPayment /> },
      { path: "/transaction/authen", element: <PaymentAuthen /> },
    ],
  },
  { path: "/unauth", element: <Unauthorized /> },
  {
    path: "/logout",
    element: (
      <RedirectIfLogin>
        <Logout />
      </RedirectIfLogin>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
