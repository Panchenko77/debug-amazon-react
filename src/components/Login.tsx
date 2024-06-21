import Link from "next/link";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <p className="text-5xl font-semibold text-center">Login</p>
      <div className="p-20 bg-[#faefef] mt-20 text-center">
        <LoginForm />
        <p className="mt-8">
          Do not have account?{" "}
          <Link href="/create-account" className="text-blue-500">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
