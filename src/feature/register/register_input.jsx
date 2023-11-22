export default function RegisterInput({ type, placeholder, name, onChange, hasError }) {
     return (
          <>

               < input className={`mb-4 px-6 py-3 text-[14px] w-[400px] bg-slate-800 shadow-sm text-white border-none outline-none ${hasError ? "border-2 border-red-500" : "border-2 border-solid"}`} type={type || "text"} placeholder={placeholder || ""} onChange={onChange} name={name} />
          </>
     )
}