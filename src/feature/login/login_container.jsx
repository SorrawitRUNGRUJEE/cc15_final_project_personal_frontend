import LoginForm from "./login_form";

export default function LoginContainer() {
    return <div className="relative bg-slate-950 min-h-[360px] max-w-3xl min-w-[600px] flex justify-center items-center m-auto  px-4">
        <p className="text-white font-semibold text-[40px] absolute top-[-100px] left-0" >Log in</p>
        < LoginForm />

    </div>
}