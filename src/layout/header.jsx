import { useAuth } from "../hook/use_auth";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!getAccessToken() ? (
        <div className="flex justify-between items-center px-8 py-2 bg-slate-950">
          <div className="text-[28px] text-white font-semibold ">STEAM CLONE</div>
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
        <div className="flex justify-between items-center px-8 py-2 bg-gray-400">
          <div>admin</div>
          <div className="flex gap-4">

            <div
              className=" p-2  hover:cursor-pointer"
              onClick={() => navigate("/admin")}
            >
              admin
            </div>
            <div
              className=" p-2  hover:cursor-pointer"
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
        <div className="flex justify-between items-center px-8 py-2 bg-gray-400">
          <div>user</div>
          <div className="flex gap-4">
            <div>Store</div>
            <div>explore</div>
            <div>profile</div>
            <div>wishlist</div>
            <div
              className=" p-2 bg-gray-300 hover:cursor-pointer"
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
