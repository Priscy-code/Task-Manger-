import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmm, setConfirmm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", email, password, fullname, confirmm);

    if (password !== confirmm) {
      setError("Password do not match");
      return;
    }
    setError("");
    setSuccess("");

    const response = await fetch("https://your-api-url/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullname }),
    });
    const data = await response.json();
    if (response.ok) {
      setSuccess("Signup successful! please login");
      console.log("Signup successful:", data);
    } else {
      setError(data.message || "signup failed, please try again ");
      console.log("Signup failed:", data);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-grayy shadow-lg max-w-md mt-20 p-6 w-full rounded-lg">
        <h2 className="text-center font-bold  text-2xl">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSignup}>
          <label htmlFor="Fullname " className="block mt-1 ">
            FullName
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your Full name"
            className="block w-full border border-black p-2 mb-2 rounded-full "
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <label htmlFor="email" className="block mt-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-black p-2 mb-2 rounded-full  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="block ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-black p-2 mb-2 rounded-full "
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm password" className="block mt-1 ">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="confirm password"
            className="w-full border border-black p-2 mb-4 rounded-full "
            value={confirmm}
            onChange={(e) => setConfirmm(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-purple w-full h-30 font-bold  rounded-full "
          >
            Register Now
          </button>
        </form>

        <p className="text-center ">
          Already have an acount?{" "}
          <a href="/login" className="font-bold text-purple hover:underline ">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
