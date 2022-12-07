import React from "react";
import FormWrap from "../../HOC/FormWrap";
import Input from "../../Ui/Input/Input";
import Password from "../../Ui/Input/PasswordInput";
import useInput from "../../../Hooks/useInput";

const Register = () => {
    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    const submitHandler = (e) => {
        e.preventDefault(); 
        console.log("name", name, "email", email, "password", password);
    };

    return (
        <FormWrap>
            <form onSubmit={submitHandler}>
                <Input change={setName} label="name" />
                <Input change={setEmail} label="email" />
                <Password change={setPassword} />
                <input className=" btn-submit" type="submit" value="submit" />
            </form>
        </FormWrap>
    );
};

export default Register;
