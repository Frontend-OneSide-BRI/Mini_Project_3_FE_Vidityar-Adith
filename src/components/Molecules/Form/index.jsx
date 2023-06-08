import React, { useEffect, useState } from "react";
import Input from "../../Atom/Input";
import { useNavigate } from "react-router-dom";

function Form() {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate();

  const onSubmit = (event) => {
    // const checkUser = account.find(
    //   (user) =>
    //     user.email === loginUser.username &&
    //     user.password === loginUser.password
    // );
    // if (checkUser) {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userName: "Vidi",
        key: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDA1ODk1ZWYwMzFiZmQwMmZlOWJjNjBlMDJmNzVhYiIsInN1YiI6IjY0N2VlY2E5OTM4MjhlMDBiZjlmZjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yxfKYpfAsVxFSp_a61vQhNbuqsujhT1an_Sv107R1cY",
      })
    );
    navigate("/");
    // } else {
    //   alert("akun anda salah");
    // }
  };
  const onChange = (event) => {
    setLoginUser({ ...loginUser, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-900 p-7">
      <h3 className="mt-5 mb-3 text-white"> Login Form </h3>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username:
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="username"
          name="username"
          required
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="password"
        >
          Password :
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
        onClick={(e) => onSubmit(e)}
      >
        Login
      </button>
    </div>
  );
}

export default Form;
