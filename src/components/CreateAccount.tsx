import Link from "next/link";
import CreateAccountForm from "@/components/CreateAccountForm";

const CreateAccount = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <p className="text-5xl font-semibold text-center">Create Account</p>
      <div className="p-20 bg-[#faefef] mt-20 text-center">
        <CreateAccountForm />
        <p className="mt-8">
          Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
