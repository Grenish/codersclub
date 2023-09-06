import React from "react";
import { PersonPin, VpnKey } from "@mui/icons-material";
import { codersclubLogo2 } from "../assets";
import { supabase } from "./helper/supabaseClient";


const AdminLogin = () => {
    
    const login = async() => {
        await supabase.auth.signInWithPassword({
            email: 'grenish126@gmail.com',
            password: '12345'
        })
    }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <img
        src={codersclubLogo2}
        alt="Coders Club logo"
        className="w-[250px] mb-5"
      />
      <div className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%] border overflow-hidden">
        <form className="rounded-[10px] bg-white p-8">
          <div className="mb-5 relative">
            <PersonPin className="absolute text-indigo-500 left-3 top-1/2 transform -translate-y-1/2" />
            <input
              placeholder="Username"
              className="pl-10 block appearance-none w-full py-2 px-3 border border-gray-300 rounded leading-tight focus:outline-none focus:border-blue-500"
              required
              type="text"
              id="username"
            />
          </div>

          <div className="mb-5 relative">
            <VpnKey className="absolute  text-indigo-500 left-3 top-1/2 transform -translate-y-1/2" />
            <input
              placeholder="Password"
              className="pl-10 block appearance-none w-full py-2 px-3 border border-gray-300 rounded leading-tight focus:outline-none focus:border-blue-500"
              required
              type="password"
              id="password"
            />
          </div>

          <button
            onClick={login}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-3 py-2 rounded hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 transition-colors ease-in duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
