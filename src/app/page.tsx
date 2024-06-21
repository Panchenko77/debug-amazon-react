import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header theme="light" heroBkg={true} hideActionButton={false} logoImageVisible={false}/>

      <section>
        <div className="relative mx-auto">
          <div className="py-5">
            <div className="flex flex-wrap justify-between items-center mt-20">
              <div className="w-full lg:w-5/12">
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-20">
                  <p className="font-nunito text-[50px] lg:text-[75px] font-extrabold mb-5">
                    Automate Your Presales
                  </p>
                  <p className="font-extralight text-2xl leading-relaxed text-black lg:text-[#797979] ">
                    World’s 1st PreSales Automation Platform for B2B Enterprises{" "}
                  </p>
                  <button className="bg-[#5236FF] py-4 px-6 text-white rounded-full text-sm mt-5">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 ">
                <div className="flex justify-end">
                  <Image
                    src="/hero-image.png"
                    alt="hero"
                    width={1100}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-md mx-auto py-5 px-20 clear-both">
          <div className="flex flex-col items-center">
            <button className="bg-[#EFECFF] text-[#5236FF] p-4 rounded-full text-sm">
              Go To The Top
            </button>
            <h2 className="font-nunito text-[30px] lg:text-[50px] font-extrabold text-center mt-10 leading-11">
              Disrupting PreSales with Generative AI Magic
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-item gap-20">
            <div className="flex flex-col w-full lg:w-4/12">
              <Image
                src="/how-it-works-1.png"
                alt=""
                width={800}
                height={300}
                className="mx-auto"
              />
              <p className="text-center text-[#797979]">
                Hyper customized Caller Scripts with your top sales propositions
                customized for each prospect in your call list. Real-time Sales
                Signal alerts based on prospect activities.
              </p>
              <a
                href="#"
                className="underline hover:text-[#5236FF] text-center mt-5 font-semibold"
              >
                Learn more
              </a>
            </div>

            <div className="flex flex-col w-full lg:w-4/12">
              <Image
                src="/how-it-works-2.png"
                alt=""
                width={800}
                height={300}
                className="mx-auto"
              />
              <p className="text-center text-[#797979]">
                Real-time feedback to Callers to improve micro-aspects of each
                call. Aggregated feedback to Managers to pinpoint improvements &
                support.
              </p>
              <a
                href="#"
                className="underline hover:text-[#5236FF] text-center mt-5 font-semibold"
              >
                Learn more
              </a>
            </div>

            <div className="flex flex-col w-full lg:w-4/12">
              <Image
                src="/how-it-works-3.png"
                alt=""
                width={800}
                height={300}
                className="mx-auto"
              />
              <p className="text-center text-[#797979]">
                90% lower campaign time 30% more sales conversion Empowered &
                happy callers
              </p>
              <a
                href="#"
                className="underline hover:text-[#5236FF] text-center mt-5 font-semibold"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto py-5 px-10 clear-both">
          <div className="flex flex-col items-center">
            <button className="bg-[#EFECFF] text-[#5236FF] p-4 rounded-full text-sm">
              Go To The Top
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both bg-[#F1F1F1]">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20 items-center">
            <div className="flex flex-col">
              <h2 className="text-[50px] mb-10 font-bold">Quick-start SaaS</h2>
              <p className="text-[#797979]">
                No training or setup required.
                <br /> Meshes into your existing workflow and IT setup.
                <br /> See results in minutes, not months
              </p>

              <div className="flex mt-5 gap-5">
                <Image
                  src="/cost-effective.png"
                  alt="cost effective"
                  width={96}
                  height={103}
                />
                <div>
                  <p className="text-[30px]">Cost Effective</p>
                  <p className="text-[#797979] ">
                    Saves 90% cost, while improving outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Image
                src="/quick-start.png"
                alt=""
                width={500}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="max-w-screen-md mx-auto py-5 px-20 clear-both">
          <div className="flex flex-col items-center">
            <button className="bg-[#EFECFF] text-[#5236FF] p-4 rounded-full text-sm">
              Go To The Top
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both ">
          <h2 className="text-center text-[50px] mb-20 font-bold">
            Ease of Use
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20 items-start">
            <div className="flex flex-col items-baseline gap-8 w-full lg:w-6/12">
              <div className="flex gap-5">
                <Image
                  src="/user-icon.svg"
                  alt="user"
                  width={96}
                  height={103}
                />
                <div>
                  <p className="text-[30px] font-semibold">
                    Create your account & start your work
                  </p>
                </div>
              </div>

              <p className="text-[#797979]">
                The system and workflow is designed by a team of AI and PreSales
                experts. It blends in your existing workflow. Just create a
                login and upload your campaign doc to begin. See results in
                minutes.
              </p>

              <button className="bg-black text-white p-4 rounded-full text-sm">
                Get Started
              </button>
            </div>

            <div className="flex flex-col">
              <Image
                src="/ease-of-use.jpg"
                alt=""
                width={500}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5236FF] py-10">
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both ">
          <div className="flex flex-col  flex-wrap lg:flex-nowrap justify-center gap-10 items-center">
            <div className="flex flex-col items-center">
              <button className="bg-[#6850FF] text-white p-4 rounded-full text-sm">
                Go To The Top
              </button>
            </div>
            <h2 className="text-[50px] text-white font-semibold">
              Trusted by Sales Leaders.
            </h2>
            <div>
              <div className="flex flex-col  items-center gap-5 max-w-screen-sm">
                <Image src="/quote-icon.svg" width={30} height={30} alt="" />
                <p className="text-white text-center">
                  “Outbound PreSales calling used to be a hated task with a lot
                  of manual preparation, frustrating workflows and slow results.
                  Turigma.ai has waved a magic wand for us. The power of
                  generative AI is unbelievable”{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Image
                src="/user-avatar.png"
                width={100}
                height={200}
                alt="logo"
              />
              <p className="text-white text-2xl">James Toriff</p>
              <p className="text-white font-light">PreSales Head</p>
              <Image src="/star.svg" alt="rating" width={80} height={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both ">
          <div className=" flex flex-col justify-center items-center">
            <button className="text-[#6850FF] bg-[#EFECFF] w-fit  p-4 rounded-full text-sm">
              Go To The Top
            </button>

            <h2 className="text-center text-[50px] mb-20 font-bold mt-5">
              Pricing
            </h2>
          </div>

          <div className="flex justify-center flex-wrap gap-10">
            <div className="w-full lg:w-3/12">
              <button className="text-[#6850FF] bg-[#EFECFF] p-4 rounded-full text-sm mb-2">
                Go To The Top
              </button>
              <h2 className="text-[35px] mb-5 font-bold">
                Simple and flexible pricing
              </h2>
              <p className="text-[#797979] mb-5">
                Simple, transparent pricing. Guaranteed 100X Return on
                Investment.
              </p>
              <h2 className="text-[22px] mb-5 leading-snug">
                Accepted Payment Methods
              </h2>
              <Image
                src="/accepted-payment-methods.png"
                alt="accepted-payment-methods"
                width={300}
                height={30}
              />
            </div>

            <div className="w-full lg:w-3/12 bg-gray-100">
              <div className="flex justify-between items-center mt-5 px-4">
                <h2 className="text-[35px] font-bold">Basic</h2>
                <span className="text-[#797979]">Save 30%</span>
              </div>
              <div className="my-4">
                <hr />
              </div>
              <h2 className="text-[25px] mb-5 font-bold mt-3 text-center">
                Call for pricing
              </h2>
              <div className="bg-[#FFEECC] text-[#C68A15] w-fit py-2 px-4 rounded-full mx-auto">
                Billed per campaign
              </div>

              <div className="my-4">
                <hr />
              </div>

              <div className="flex flex-col justify-center w-full text-center mb-10 mt-8">
                <p className="text-[#797979] mb-5">Unlimited members</p>
                <p className="text-[#797979] mb-5">
                  <span className="font-semibold">Unlimited</span> feedback
                </p>
              </div>

              <div className="flex justify-center mb-5">
                <button className="bg-slate-100 py-4 px-20 border rounded-full">
                  Get Started
                </button>
              </div>
            </div>

            <div className="w-full lg:w-4/12 bg-gray-100">
              <div className="flex justify-between items-center px-4 mt-5">
                <h2 className="text-[35px] font-bold">Advanced</h2>
                <button className="text-[#6850FF] bg-[#EFECFF] p-4 rounded-full text-sm mb-2">
                  Popular
                </button>
              </div>
              <div className="my-4">
                <hr />
              </div>
              <h2 className="text-[25px] mb-5 font-bold mt-3 text-center">
                Call for pricing
              </h2>
              <div className="bg-[#FFEECC] text-[#C68A15] w-fit py-2 px-4 rounded-full mx-auto">
                Billed per campaign
              </div>

              <div className="my-4">
                <hr />
              </div>

              <div className="flex flex-col justify-center w-full text-center mb-10 mt-8">
                <p className="text-[#797979] mb-5">Unlimited members</p>
                <p className="text-[#797979] mb-5">
                  <span className="font-semibold text-[#5236FF]">
                    Unlimited
                  </span>{" "}
                  feedback
                </p>
                <p className="text-[#797979] mb-5">Caller feedback</p>
                <p className="text-[#797979] mb-5">Manager Dashboard</p>
                <p className="text-[#797979] mb-5">Real-time Prospect Alerts</p>
              </div>

              <div className="flex justify-center mb-5">
                <button className="bg-black py-4 px-20 border rounded-full text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10 bg-cover"
        style={{ backgroundImage: `url('Background.png')` }}
      >
        <div className="max-w-screen-xl mx-auto px-20">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-6/12  flex flex-col justify-center lg:justify-normal items-center lg:items-start">
              <p className="text-white font-bold text-[45px]">
                Start your trial today
              </p>
              <p className="text-white">
                Call us today for a no-commitment pilot. You will see results in
                days. Guaranteed.
              </p>
              <form className="my-5">
                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="your mail here..."
                    className="rounded-full px-6 py-5 bg-[#806be9] placeholder:text-white"
                  />
                  <button className=" bg-white rounded-full text-sm px-14 py-5 text-[#5236FF]">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-6/12 flex flex-col justify-center lg:justify-normal items-center lg:items-start">
              <Image
                src="/departments-analytics.png"
                alt=""
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-screen-xl mx-auto py-5 px-20 clear-both ">
          <div className=" flex flex-col justify-center items-center">
            <button className="text-[#6850FF] bg-[#EFECFF] w-fit  p-4 rounded-full text-sm">
              Go To The Top
            </button>

            <h2 className="text-center text-[50px] mb-20 font-bold mt-5">
              Most popular articles
            </h2>
          </div>

          <div className="flex justify-center gap-10 mb-5 flex-wrap">
            <button className="p-7 bg-[#5236FF] text-white font-semibold rounded-lg text-2xl shadow-md">
              01. Upload Campaign
            </button>
            <button className="p-7 bg-[#F9F9F9] text-black font-semibold rounded-lg text-2xl shadow-md">
              02. AI Automates PreSales
            </button>
            <button className="p-7 bg-[#F9F9F9] text-black font-semibold rounded-lg text-2xl shadow-md">
              03. Instant Results
            </button>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="w-full lg:w-4/12 bg-[#F9F9F9] p-4">
              <Image
                src="/blogpost-1.png"
                alt="blog post 1"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className=" p-4">
                <p className="text-[#797979] text-sm mt-2">November 15, 2022</p>
                <p className="text-[20px] mt-5">
                  10 Top tips for making your Saas product sticky
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
                <p className="text-[#5236FF] text-sm mt-5 font-semibold underline">
                  <a href="#">Read More</a>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-4/12 bg-[#F9F9F9] p-4">
              <Image
                src="/blogpost-2.png"
                alt="blog post 2"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className=" p-4">
                <p className="text-[#797979] text-sm mt-2">November 15, 2022</p>
                <p className="text-[20px] mt-5">
                  Automate Reports Generation with Saasup
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
                <p className="text-[#5236FF] text-sm mt-5 font-semibold underline">
                  <a href="#">Read More</a>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-4/12 bg-[#F9F9F9] p-4">
              <Image
                src="/blogpost-1.png"
                alt="blog post 1"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className=" p-4">
                <p className="text-[#797979] text-sm mt-2">November 15, 2022</p>
                <p className="text-[20px] mt-5">
                  10 Top tips for making your Saas product sticky
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
                <p className="text-[#5236FF] text-sm mt-5 font-semibold underline">
                  <a href="#">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
