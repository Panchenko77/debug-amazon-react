"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handler = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const payload = { email, password };
      const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/login`;
      const response = await axios.post(endpoint, payload);
      if (response.status === 200) {
        await createSession(response.data);
        router.push("/caller-dashboard");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Login");
    }
  };

  const createSession = async (accessToken: any) => {
    try {
      await axios
        .post("/api/login", null, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          localStorage.setItem("accessToken", accessToken);
        });
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handler}
      className="mt-5 flex flex-col gap-10 justify-center items-center "
    >
      <input
        type="text"
        className="w-full p-4 border border-slate-400 rounded-lg"
        placeholder="Enter Your login ID"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-4 border border-slate-400 rounded-lg"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#5236FF] py-4 px-20 rounded-full text-white w-fit"
      >
        Login
      </button>

      <button className="border border-gray-300 py-4 px-20 rounded-full text-[#5236FF] w-fit">
        Reset Password
      </button>
    </form>
  );
};

export default LoginForm;
