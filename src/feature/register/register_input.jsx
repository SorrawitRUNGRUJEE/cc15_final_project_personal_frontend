export default function RegisterInput({type,placeholder,name,onChange,hasError}){
     return (
<>
          
          < input className={`px-2 py-0.5 rounded-lg ${hasError? "border-2 border-red-500":"border-2 border-solid"}`} type={type|| "text"} placeholder={placeholder||""} onChange={onChange} name={name}/>
</>
     )
}