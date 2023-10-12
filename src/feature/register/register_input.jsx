export default function RegisterInput({type,placeholder,name,onChange}){
     return (
<>
          
          < input className="  px-2 py-0.5 rounded-lg" type={type|| "text"} placeholder={placeholder||""} onChange={onChange} name={name}/>
</>
     )
}