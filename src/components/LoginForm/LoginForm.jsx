import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const email = {
  name: "email",
  type: "email",
  placeholder: "Enter your email",
  label: "Email",
};

const pass = {
  name: "password",
  type: "password",
  placeholder: "Enter your password",
  label: "Password",
};

const button = {
  name: "Login",
  type: "submit",
};

function LoginForm() {
  return (
    <div className="login_form-wrapper">
        <p className="title">Login form</p>
        <Input
          name={email.name}
          type={email.type}
          placeholder={email.placeholder}
          label={email.label}
        />
        <Input
          name={pass.name}
          type={pass.type}
          placeholder={pass.placeholder}
          label={pass.label}
        />
      <Button name={button.name} type={button.type} />
    </div>
  );
}

export default LoginForm;
