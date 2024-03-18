import React, { useState } from "react";
import { useAddPassengerMutation } from "../services/flightApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState({});
  const [addPassenger] = useAddPassengerMutation();
  const [passengerEmail, setPassengerEmail] = useState("");

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setPassengerEmail(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(passenger);
    await addPassenger(passenger);
    navigate("/", { state: passengerEmail });
  };
  return (
    <div className="flex justify-center">
      <form
        className="shadow-2xl text-center bg-white my-6 p-8 w-[50%] rounded-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-3xl font-semibold mb-5">Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            className="m-3 p-3 rounded-md outline-none w-fit md:w-96 bg-gray-100"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            className="m-3 p-3 rounded-md outline-none w-fit md:w-96 bg-gray-100"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            className="m-3 p-3 rounded-md outline-none w-fit md:w-96 bg-gray-100"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirm_password"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            className="m-3 p-3 rounded-md outline-none w-fit md:w-96 bg-gray-100"
          />
        </div>

        <div>
          <button className="bg-gradient-to-r from-blue-300 to-blue-700 p-3 m-3 rounded-md w-fit md:w-96 text-white font-semibold">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
