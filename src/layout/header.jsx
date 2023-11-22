import { useAuth } from "../hook/use_auth";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!getAccessToken() ? (
        <div className="flex justify-between items-center px-8 py-2 bg-red-300 sticky top-0 z-50 w-full ">
          <div className=" ">default</div>
          <div className="flex gap-4">
            <div
              className=" p-2  hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Store
            </div>
            <div
              className=" p-2  hover:cursor-pointer"
              onClick={() => navigate("/explore")}
            >
              explore
            </div>
            <div
              className=" p-2   hover:cursor-pointer"
              onClick={() => navigate("/register")}
            >
              register
            </div>
            <div
              className=" p-2   hover:cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </div>
          </div>
        </div>
       
      ) : user.isAdmin ? (
        <div className="flex justify-between items-center px-8 py-2 bg-red-300 sticky top-0 z-50 w-full">
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
        <div className="flex justify-between items-center px-8 py-2 bg-red-300 sticky top-0 z-50 w-full">
        <div>user</div>
        <div className="flex gap-4">
          <div className=" hover:cursor-pointer"
          onClick={() => navigate("/")}
          >Store</div>
          <div
          className=" hover:cursor-pointer"
          onClick={() => navigate("/explore")}
          >explore</div>
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
