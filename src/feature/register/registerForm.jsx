import { useState } from "react";
import RegisterButton from "./register_button";
import RegisterInput from "./register_input";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/use_auth";


export default function RegisterForm() {
    const {register} = useAuth()
    const [input,setInput] =  useState({
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
        region:""
    })
    
    const hdl_change = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    
    const hdl_submit = (e) =>{
        e.preventDefault()
        register(input)
    
        
       
        
    }

    const registerInput = [
        {id:"1",label:"email",type:"email",placeholder:"enter your email",name:"email",onChange:hdl_change},
        {id:"2",label:"confirm email",type:"email",placeholder:"confirm your e-mail",name:"confirmEmail",onChange:hdl_change},
        {id:"3",label:"username",type:"text",placeholder:" enter your username",name:"username",onChange:hdl_change},
        {id:"4",label:"password",type:"password",placeholder:"enter your password",name:"password",onChange:hdl_change},
        {id:"5",label:"confirm password",type:"password",placeholder:"confirm your password",name:"confirmPassword",onChange:hdl_change},
]
  return (
    <form className=" flex flex-col gap-4  items-center" onSubmit={hdl_submit}>
        {registerInput.map(el=>{
            return(<div className=" flex flex-col">
            <label >{el.label}</label>
            <RegisterInput  key={el.id} type={el.type} placeholder={el.placeholder} name={el.name} onChange={el.onChange}/>
          </div>)
        })}
    <div className=" flex flex-col">
        <label htmlFor="region">choose your region:</label>
        <select name="region" id="region" onChange={hdl_change}>
        <option>Select one</option>
        <option value={"AO"}>Asia-Oceania</option>
        <option value={"EU"}>Europe</option>
        <option value={"AFRICA"}>Africa</option>
        <option value={"NA"}>North America</option>
        <option value={"SA"}>South America</option>
        </select>
      </div>
      <RegisterButton className={" bg-blue-400"}>
        register
      </RegisterButton>
    </form>
  );
}
