import React from "react";
import FormWrap from "../../HOC/FormWrap";
import useInput from "../../../Hooks/useInput";
import PasswordInput from "../../Ui/Input/PasswordInput";
import Input from "../../Ui/Input/Input";

const Login = () => {
    const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  

  const submitHandler = (form) => {
    form.preventDefault();
    console.log(email);
    console.log(password);
  }

    return (
        <FormWrap>
            <form onSubmit={submitHandler}>
                <Input label='email' type="email" change={setEmail} />
                <PasswordInput change={setPassword} />
                <div className="inputWrap">
                    <input
                        className=" btn-submit"
                        type="submit"
                        value="submit"
                    />
                </div>
            </form>
        </FormWrap>
    );
};

export default Login;
