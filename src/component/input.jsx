export default function Input({type,placeholder,name,onChange,hasError,className}){
    return < input className={  ` ${className} ${hasError? "border-2 border-red-500":" border-2 border-solid"}`} type={type|| "text"} placeholder={placeholder||""} onChange={onChange} name={name}/>
    }