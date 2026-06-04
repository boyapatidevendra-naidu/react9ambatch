import Form from "./Form";


const Login = () => {
  let loginData = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Your Password",
    },
  ];
  return <div>
    <Form data={loginData}/>
  </div>;
};

export default Login;
