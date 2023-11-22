import RegisterForm from "./registerForm";

export default function RegisterContainer() {
    return <div className="relative bg-slate-950 min-h-[700px] max-w-3xl min-w-[600px] flex justify-center items-center m-auto  px-4" >
        <p className="text-white font-semibold text-[40px] absolute top-[-80px] left-0" >Register</p>
        < RegisterForm />
    </div>
}