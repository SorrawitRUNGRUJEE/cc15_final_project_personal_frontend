import Joi from "joi";
import { useAuth } from "../../hook/use_auth";
import { useState } from "react";
import LoginInput from "./login_input";
import ErrorMessage from "../register/error_message";
import { useNavigate } from "react-router-dom";
const loginSchema = Joi.object({
  username: Joi.string().trim().required(),
  password: Joi.string().required(),
});

const validateLogin = (inp) => {
  const { error } = loginSchema.validate(inp, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});

    return result;
  }
};

export default function LoginForm() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username:"",
    password:""
  });
  const [error, setError] = useState({});
  const { login } = useAuth();

  const hdl_change = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})

  }
  const hdl_submit = (e) => {
    e.preventDefault();
    const result = validateLogin(input);
    if (result) return setError(result);
    setError({})
    login(input)
  
  };

  const loginInput = [
    {id:"1",label:"username",type:"text",placeholder:"enter username",name:"username",onChange:hdl_change,hasError:error.username}, 
    {id:"2",label:"password",type:"password",placeholder:"enter password",name:"password",onChange:hdl_change,hasError:error.password}];
  return (
    <form onSubmit={hdl_submit}>
        {loginInput.map(el=>{
            return (<>
                <div className=" flex flex-col gap-2">
                  <label>{el.label}</label>
                  <LoginInput
                key={el.id}
                type={el.type}
                placeholder={el.placeholder}
                name={el.name}
                onChange={el.onChange}
                hasError={el.hasError}
              />
                </div>
                <div>

                {el.hasError && <ErrorMessage hasError={el.hasError} />}
                </div>
              </>)
        })}
        <button>submit</button>      
    </form>
  );
}
