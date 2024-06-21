import Header from "@/components/Header";
import Login from "@/components/Login";

const Page = () => {
  return (
    <>
      <Header theme="dark" heroBkg={false} hideActionButton={true} />
      <Login />
    </>
  );
};

export default Page;
