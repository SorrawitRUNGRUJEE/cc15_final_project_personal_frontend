import { useAuth } from "../hook/use_auth";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!getAccessToken() ? (
        <div className="flex justify-between items-center px-8 py-2 bg-green-200">
          <div className=" bg-red-200">default</div>
          <div className="flex gap-4">
            <div
              className=" p-2 bg-blue-300 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Store
            </div>
            <div
              className=" p-2 bg-blue-300 hover:cursor-pointer"
              onClick={() => navigate("/explore")}
            >
              explore
            </div>
            <div
              className=" p-2 bg-blue-300  hover:cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </div>
          </div>
        </div>
       
      ) : user.isAdmin ? (
        <div className="flex justify-between items-center px-8 py-2 bg-green-200">
          <div>admin</div>
          <div className="flex gap-4">
        
            <div
              className=" p-2 bg-blue-300 hover:cursor-pointer"
              onClick={() => navigate("/admin")}
            >
              admin
            </div>
            <div
              className=" p-2 bg-blue-300 hover:cursor-pointer"
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
        <div className="flex justify-between items-center px-8 py-2 bg-green-200">
        <div>user</div>
        <div className="flex gap-4">
          <div>Store</div>
          <div>explore</div>
          <div>profile</div>
          <div>wishlist</div>
          <div
            className=" p-2 bg-blue-300 hover:cursor-pointer"
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
