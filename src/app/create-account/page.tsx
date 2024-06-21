import CreateAccount from "@/components/CreateAccount";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header theme="dark" heroBkg={false} hideActionButton={true} />
      <CreateAccount />
    </>
  );
};

export default Page;
