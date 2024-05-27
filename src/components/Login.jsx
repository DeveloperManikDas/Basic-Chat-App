import React, { useState, useEffect } from "react";
import { MdArrowCircleRight } from "react-icons/md";
import "../App.css"

export const Login = () => {
  const [greeting, setGreeting] = useState("Good Morning");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 17 || hour < 4) {
      setGreeting("Good Evening");
    } else if (hour >= 4 && hour < 12) {
      setGreeting("Good Morning");
    } else {
      setGreeting("Good Afternoon");
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-screen h-svh flex flex-col gap-y-16 justify-center items-center">
      <h1 className="text-4xl  text-purple-950 ">{greeting}</h1>
      <div className="relative w-72 h-7">
        <input
          type="text"
          placeholder="Enter your first name"
          value={inputValue}
          onChange={handleInputChange}
          className="w-72 outline-none p-1 h-10 bg-transparent border-b-2 border-slate-400 focus:border-purple-900 text-lg"
        />
        {inputValue.length > 3 && (
          <button className="absolute right-0 bottom-0 animate-scale">
            <MdArrowCircleRight size="2rem" color="#7000ff" />
          </button>
        )}
      </div>
    </div>
  );
};
