"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateAccountForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handler = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (confirmPassword !== password) {
        alert("password is not matched");
        return;
      }
      const payload = { email, password };
      const endpoint = `${process.env.NEXT_PUBLIC_API_BASEURL}/create-account`;
      const response = await axios.post(endpoint, payload);
      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      alert("Please check the console log.");
    }
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

      <input
        type="password"
        className="w-full p-4 border border-slate-400 rounded-lg"
        placeholder="Confirm Your Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#5236FF] py-4 px-20 rounded-full text-white w-fit"
      >
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
