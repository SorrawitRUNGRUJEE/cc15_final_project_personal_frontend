import { useState } from "react";
import RegisterButton from "./register_button";
import RegisterInput from "./register_input";
import { useAuth } from "../../hook/use_auth";
import Joi from "joi";
import ErrorMessage from "./error_message";
import { useNavigate } from "react-router-dom";

const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  confirmEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .valid(Joi.ref("email"))
    .required()
    .strip(),
  username: Joi.string().trim().required(),
  region: Joi.string().trim().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (inp) => {
  const { error } = registerSchema.validate(inp, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});

    return result;
  }
};

export default function RegisterForm() {
  const { register } = useAuth();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    username: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    region: "",
  });

  const navigate = useNavigate();

  const hdl_change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdl_submit = async (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) return setError(result);
    const oldInput = { ...input }
    delete input.confirmEmail;
    await register(input)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {

        setError({});
        setInput({ ...input, ...oldInput });
      });
  };

  const registerInput = [
    {
      id: "1",
      hasError: error.email,
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      onChange: hdl_change,
    },
    {
      id: "2",
      hasError: error.confirmEmail,
      label: "Confirm email",
      type: "email",
      placeholder: "Confirm your e-mail",
      name: "confirmEmail",
      onChange: hdl_change,
    },
    {
      id: "3",
      hasError: error.username,
      label: "Username",
      type: "text",
      placeholder: " Enter your username",
      name: "username",
      onChange: hdl_change,
    },
    {
      id: "4",
      hasError: error.password,
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      onChange: hdl_change,
    },
    {
      id: "5",
      hasError: error.confirmPassword,
      label: "Confirm password",
      type: "password",
      placeholder: "Confirm your password",
      name: "confirmPassword",
      onChange: hdl_change,
    },
  ];
  return (
    <form className=" flex flex-col gap-2 items-center" onSubmit={hdl_submit}>
      {registerInput.map((el) => {
        return (
          <>
            <div className=" flex flex-col g">
              <label className="text-sky-600 text-[20px] font-semibold">{el.label}</label>
              <RegisterInput
                key={el.id}
                type={el.type}
                placeholder={el.placeholder}
                name={el.name}
                onChange={el.onChange}
                hasError={el.hasError}
              />
            </div>
            {el.hasError && <ErrorMessage hasError={el.hasError} />}
          </>
        );
      })}
      <div className=" flex items-center gap-4">
        <label className="text-sky-600 text-[20px] pb-4 font-semibold" htmlFor="region">Choose your region:</label>
        <select className="mb-4 px-4 rounded-lg py-2 w-[200px] bg-slate-800 shadow-sm text-white border-none outline-none" name="region" id="region" onChange={hdl_change}>
          <option className="">Select one</option>
          <option value={"AO"}>Asia-Oceania</option>
          <option value={"EU"}>Europe</option>
          <option value={"AFRICA"}>Africa</option>
          <option value={"NA"}>North America</option>
          <option value={"SA"}>South America</option>
        </select>
      </div>
      <RegisterButton className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-3 w-[200px] justify-center items-center mt-4 font-semibold text-[18px]">register</RegisterButton>
    </form>
  );
}
