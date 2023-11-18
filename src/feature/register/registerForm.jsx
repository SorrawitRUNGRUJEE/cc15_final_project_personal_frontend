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
    const oldInput = {...input}
    delete input.confirmEmail;
    await register(input)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
       
        setError({});
        setInput({...input,...oldInput});
      });
  };

  const registerInput = [
    {
      id: "1",
      hasError: error.email,
      label: "email",
      type: "email",
      placeholder: "enter your email",
      name: "email",
      onChange: hdl_change,
    },
    {
      id: "2",
      hasError: error.confirmEmail,
      label: "confirm email",
      type: "email",
      placeholder: "confirm your e-mail",
      name: "confirmEmail",
      onChange: hdl_change,
    },
    {
      id: "3",
      hasError: error.username,
      label: "username",
      type: "text",
      placeholder: " enter your username",
      name: "username",
      onChange: hdl_change,
    },
    {
      id: "4",
      hasError: error.password,
      label: "password",
      type: "password",
      placeholder: "enter your password",
      name: "password",
      onChange: hdl_change,
    },
    {
      id: "5",
      hasError: error.confirmPassword,
      label: "confirm password",
      type: "password",
      placeholder: "confirm your password",
      name: "confirmPassword",
      onChange: hdl_change,
    },
  ];
  return (
    <form className=" flex flex-col gap-4  items-center" onSubmit={hdl_submit}>
      {registerInput.map((el) => {
        return (
          <>
            <div className=" flex flex-col gap-2">
              <label>{el.label}</label>
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
      <RegisterButton className="">register</RegisterButton>
    </form>
  );
}
