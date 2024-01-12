import { useAuth } from "../hook/use_auth";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!getAccessToken() ? (
        <div className="flex justify-between items-center px-8 py-4 bg-slate-950 sticky top-0 z-50 w-full">
          <div className="text-[28px] text-white font-semibold ">{`Vapour`}</div>
          <div className="flex gap-6">
            <div
              className=" p-2  hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/")}
            >
              Store
            </div>
            <div
              className=" p-2  hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/explore")}
            >
              explore
            </div>
            <div
              className=" p-2   hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/register")}
            >
              register
            </div>
            <div
              className=" p-2   hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/login")}
            >
              Log in
            </div>
          </div>
        </div>
      ) : user.isAdmin ? (
        <div className="flex justify-between items-center px-8 py-4 bg-slate-950 sticky top-0 z-50 w-full">
          <div className="text-[28px] text-white font-semibold ">
            Welcome Admin!
          </div>
          <div className="flex gap-4">
            <div
              className=" p-2  hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/admin")}
            >
              Admin
            </div>
            <div
              className="  p-2  hover:cursor-pointer text-white active:text-slate-300 border-2 border-white rounded-2xl"
              onClick={() => {
                logOut();
                navigate("/logout");
              }}
            >
              Log out
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center px-8 py-2 bg-slate-950 sticky top-0 z-50 w-full">
          <div className="text-[28px] text-white font-semibold ">{`${user.username}`}</div>
          <div className="flex gap-4 items-center">
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/")}
            >
              Store
            </div>
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/explore")}
            >
              explore
            </div>
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/explore")}
            >
              profile
            </div>
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/")}
            >
              wishlist
            </div>
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/transaction/basket")}
            >
              basket
            </div>
            <div
              className=" hover:cursor-pointer text-white active:text-slate-300"
              onClick={() => navigate("/transaction/confirm")}
            >
              payment
            </div>
            <div
              className=" p-2 bg-gray-300 hover:cursor-pointer  text-white active:text-slate-300 border-2 border-white rounded-2xl"
              onClick={() => {
                logOut();
                navigate("/logout");
              }}
            >
              Log out
            </div>
          </div>
        </div>
      )}
    </>
  );
}
