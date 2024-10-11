import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../constants/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleChange = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const mockResponse = {
      token: "mockToken123n",
      user: { name: "John Doe", email: email },
    };

    if (mockResponse.token) {
      dispatch(login({ user: mockResponse.user, token: mockResponse.token }));
      localStorage.setItem("token", mockResponse.token);
      setSuccess("Login successful!");

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      setError("Login failed, mock token not found");
    }

    // try{
    //     const response = await fetch ('https://your-api-url/login', {
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({email, password})
    // });
    // const data = await response.json();
    // if(response.ok){
    //     localStorage.setItem('token', data.token);
    //     setSuccess('Login successful!');
    //     console.log('Login successful!', data)
    // }else {
    //     setError(data.message || 'Login failed, please try again ')
    //     console.error(data.message)
    // }}
    //  catch(error){
    //     console.error('Ensure during login:', error);
    //     setError('An error occured during login')
    //  }
  };

  return (
    <div className=" flex items-center justify-center min-h-screen  ">
      <div className="bg-grayy shadow-lg max-w-md mx-auto mt-20 items-center p-6 w-full rounded-lg ">
        <h2 className="text-center font-bold text-3xl">Login </h2>

        <form onSubmit={handleChange}>
          <div className="mb-4">
            <label htmlFor="Email" className="mb-1 text-black block ">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black bg-white p-2 mb-4 w-full rounded-full"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="Password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              className="border border-black bg-white w-full p-2 mb-6 focus:outline-none rounded-full   "
              placeholder="Enter Password "
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="space-x-4">
              <label htmlFor="role" className="block mb-2">
                Select Role:
              </label>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                />
                User
              </label>
              <label></label>
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </div>

            <button
              type="submit"
              className="block bg-purple w-full text-center text-black font-bold py-2 px-4 hover:bg-blue-600 transition duration-300 rounded-full "
            >
              Login{" "}
            </button>
            <p className="text-center ">
              Don't have an account?{" "}
              <a href="/signup" className="font-bold hover:underline">
                Register{" "}
              </a>
            </p>
            <p className="text-center ">
              Forgotten Password?{" "}
              <span className="font-bold hover:underline">Click here</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
