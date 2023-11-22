import { toast } from "react-toastify"
import RegisterForm from "../feature/register/registerForm"
import RegisterContainer from "../feature/register/register_container"

export default function RegisterFinal() {
    return (
        <div className="w-screen h-screen flex flex-col bg-gradient-to-r from-violet-900 to-sky-900 items-center justify-center">
            < RegisterContainer />
        </div>
    )
}