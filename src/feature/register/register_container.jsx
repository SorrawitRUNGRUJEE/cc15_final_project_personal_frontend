import RegisterForm from "./registerForm";

export default function RegisterContainer() {
    return <div className="relative bg-slate-950 min-h-[860px] max-w-3xl min-w-[800px] flex justify-center items-center m-auto  px-4" >
        <p className="text-white font-semibold text-[40px] absolute top-[-100px] left-0" >Register</p>
        < RegisterForm />
    </div>
}