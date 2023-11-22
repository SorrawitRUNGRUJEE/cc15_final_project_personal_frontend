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
    username: "",
    password: ""
  });
  const [error, setError] = useState({});
  const { login } = useAuth();

  const hdl_change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })

  }
  const hdl_submit = async (e) => {
    e.preventDefault();
    const result = validateLogin(input);
    if (result) return setError(result);
    setError({})
    await login(input).then(res => {
      navigate('/profile')
    }).catch(error => {
      setError({})
    })

  };

  const loginInput = [
    { id: "1", label: "USERNAME", type: "text", placeholder: "Enter username", name: "username", onChange: hdl_change, hasError: error.username },
    { id: "2", label: "PASSWORD", type: "password", placeholder: "Enter password", name: "password", onChange: hdl_change, hasError: error.password }];
  return (
    <>
      <div className=" flex flex-col gap-4 h-full w-full justify-center items-center">
        <form onSubmit={hdl_submit}>
          {loginInput.map(el => {
            return (<>
              <div className=" flex flex-col gap-4">
                <label className="text-sky-600 text-[20px] font-semibold" >{el.label}</label>
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
          <div className=" h-full w-full flex flex-col items-center">
            <button className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-3 w-[200px] justify-center items-center mt-4 font-semibold text-[18px]">Submit</button>
          </div>
        </form>

        <label
          className=" hover:underline text-slate-400 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => navigate('/register')}
        > Not a member yet ? subscribe now!</label>
      </div>
    </>
  );
}
