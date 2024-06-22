"use client";

import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import FeedbackBox from "./FeedbackBox";
import AiChat from "./AiChat";
import Accordion from "./Accordion";
import ConnectCCP from "./ConnectCCP.jsx";

type Props = {
  records: any[];
};

const CallerDashboard = ({ records }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<any>(null);
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [note, setNote] = useState("");

  const viewHandler = (payload: any) => {
    setOpenModal(true);
    setSelectedFaq(payload);
  };

  const handleNext = () => {
    if (currentIndex < records.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go back to the previous item
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const saveButtonHandler = async () => {
    let payload = {
      q1: "Prospect title in-correct",
      a1: a1,
      q2: "Prospect phone number wrong",
      a2: a2,
      q3: "Prospect didn’t answer",
      a3: a3,
      note,
    };
    let config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/assessments`,
      payload,
      config
    );
    if (response.status === 200) {
      initialState();
      alert("Assessment has been submitted, Thank You");
    }
  };

  const initialState = () => {
    setA1(false);
    setA2(false);
    setA3(false);
    setNote("");
  };

  const call_script = [
    {
      uuid: "ss_a4",
      title: "Intro: Linkedin Post",
      body: records[currentIndex]?.call_script?.ss_a4,
    },
    {
      uuid: "bs_a5",
      title: "Intro: LinkedIn Events",
      body: records[currentIndex]?.call_script?.bs_a5,
    },
    {
      uuid: "ss_a2",
      title: "Intro: News",
      body: records[currentIndex]?.call_script?.ss_a2,
    },
    {
      uuid: "ss_a3",
      title: "Intro: Investments ",
      body: records[currentIndex]?.call_script?.ss_a3,
    },
    {
      uuid: "bs_a3",
      title: "Intro: Company Awards",
      body: records[currentIndex]?.call_script?.bs_a3,
    },
    {
      uuid: "intro",
      title: "Buyer Job Challenges ",
      body: records[currentIndex]?.call_script?.intro,
    },
    {
      uuid: "bs_a1",
      title: "Value Proposition",
      body: records[currentIndex]?.call_script?.bs_a1,
    },
    {
      uuid: "bs_a4",
      title: "Case Study",
      body: records[currentIndex]?.call_script?.bs_a4,
    },
    {
      uuid: "ss_a1",
      title: "Buyer Industry Challenges",
      body: records[currentIndex]?.call_script?.ss_a1,
    },
    {
      uuid: "bs_a2",
      title: "Buyer Values",
      body: records[currentIndex]?.call_script?.bs_a2,
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-20">
        <div className="flex flex-col items-center py-20">
          <h1 className="text-5xl mb-2 font-semibold">Caller Dashboard</h1>
          <p>All you need to create call magic</p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between py-10 gap-20">
          <div className="flex flex-wrap gap-10 justify-center lg:justify-between items-end w-full">
            <div className="xl:w-7/12">
              <div className="w-full space-y-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 justify-between items-center">
                  <p>First Name: {records[currentIndex]?.f_name}</p>
                  <p>Last Name: {records[currentIndex]?.l_name}</p>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 justify-between items-center">
                  <p>Company: {records[currentIndex]?.company}</p>
                  <p>Title: {records[currentIndex]?.title}</p>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 justify-between items-center">
                  <p>Phone: {records[currentIndex]?.phone}</p>
                  <p>Email: {records[currentIndex]?.email}</p>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 justify-between items-center">
                  <p>Location: {records[currentIndex]?.location}</p>
                  <p>Campaign S. No. {records[currentIndex]?.s_no}</p>
                </div>
              </div>
            </div>

            <div className="xl:w-2/12">
              <ConnectCCP phoneNum={records[currentIndex]?.phone} />
              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-[#9B65FE] p-2 rounded-full flex items-center justify-center"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                  >
                    <svg
                      width="19"
                      height="24"
                      viewBox="0 0 19 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.730324 5.18003L4.37257 0.861542C4.83919 0.308548 5.46783 -9.91821e-05 6.12672 -9.91821e-05L15.7227 -9.91821e-05C17.0945 -9.91821e-05 18.207 1.32451 18.207 2.95777L18.207 20.1134C18.207 21.7467 17.0945 23.0713 15.7227 23.0713L2.48448 23.0713C1.1127 23.0713 0.000148773 21.7467 0.000148773 20.1134V7.27626C-0.00201225 6.48921 0.261541 5.7356 0.730324 5.18003Z"
                        fill="#5236FF"
                      />
                      <path
                        d="M1.79289 11.2924C1.40237 11.6829 1.40237 12.3161 1.79289 12.7066L8.15685 19.0706C8.54738 19.4611 9.18054 19.4611 9.57107 19.0706C9.96159 18.6801 9.96159 18.0469 9.57107 17.6564L3.91421 11.9995L9.57107 6.34266C9.96159 5.95213 9.96159 5.31897 9.57107 4.92844C9.18054 4.53792 8.54738 4.53792 8.15685 4.92844L1.79289 11.2924ZM16.5 10.9995L2.5 10.9995V12.9995L16.5 12.9995V10.9995Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="text-[12px]">Previous</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-[#9B65FE] p-2 rounded-full flex items-center justify-center"
                    onClick={handleNext}
                    disabled={currentIndex === records.length - 1}
                  >
                    <svg
                      width="19"
                      height="24"
                      viewBox="0 0 19 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4767 17.8913L13.8345 22.2097C13.3678 22.7627 12.7392 23.0714 12.0803 23.0714H2.48433C1.11255 23.0714 0 21.7468 0 20.1135V2.95787C0 1.32461 1.11255 0 2.48433 0H15.7226C17.0943 0 18.2069 1.32461 18.2069 2.95787V15.795C18.209 16.5821 17.9455 17.3357 17.4767 17.8913Z"
                        fill="#5236FF"
                      />
                      <path
                        d="M15.2071 12.7071C15.5976 12.3166 15.5976 11.6834 15.2071 11.2929L8.84315 4.92893C8.45262 4.53841 7.81946 4.53841 7.42893 4.92893C7.03841 5.31946 7.03841 5.95262 7.42893 6.34315L13.0858 12L7.42893 17.6569C7.03841 18.0474 7.03841 18.6805 7.42893 19.0711C7.81946 19.4616 8.45262 19.4616 8.84315 19.0711L15.2071 12.7071ZM0.5 13L14.5 13V11L0.5 11L0.5 13Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="text-[12px]">Next</p>
                </div>
              </div>

              <select
                onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
                className="border border-black p-2 rounded-full"
              >
                <option value={currentIndex}>Search By Company</option>
                {records.map((record) => (
                  <option key={record.index} value={record.index}>
                    {record.company}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F9F9] mt-20">
          <p className="text-4xl">Call Script</p>
          <hr />
          <br />

          {call_script.map((item) => (
            <div key={item.uuid}>
              <Accordion title={item.title} body={item.body} uuid={item.uuid} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-10">
        <div className="max-w-screen-lg mx-auto">
          <p className="text-4xl text-center mb-5">
            Frequently Asked Questions
          </p>
          <div className="flex bg-[#F9F9F9] gap-5 flex-wrap p-10 justify-normal  lg:justify-center">
            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a1,
                    q: records[currentIndex]?.q1,
                  })
                }
              >
                {records[currentIndex]?.q1}
              </button>
            </div>

            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a2,
                    q: records[currentIndex]?.q2,
                  })
                }
              >
                {records[currentIndex]?.q2}
              </button>
            </div>

            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a3,
                    q: records[currentIndex]?.q3,
                  })
                }
              >
                {records[currentIndex]?.q3}
              </button>
            </div>

            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a4,
                    q: records[currentIndex]?.q4,
                  })
                }
              >
                {records[currentIndex]?.q4}
              </button>
            </div>

            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a5,
                    q: records[currentIndex]?.q5,
                  })
                }
              >
                {records[currentIndex]?.q5}
              </button>
            </div>

            <div className="w-full lg:w-3/12 flex justify-center ">
              <button
                className="w-full py-10  bg-slate-300 rounded-lg px-4"
                onClick={() =>
                  viewHandler({
                    a: records[currentIndex]?.a6,
                    q: records[currentIndex]?.q6,
                  })
                }
              >
                {records[currentIndex]?.q6}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className=" p-20">
          <div className="max-w-screen-lg mx-auto">
            <p className="text-4xl text-center mb-20">Notepad</p>
            <div className="flex flex-wrap items-stretch justify-between">
              <div className="w-full lg:w-5/12 mb-20">
                <div className="flex items-center mb-4">
                  <div>
                    <input
                      id="default-checkbox-1"
                      type="checkbox"
                      value="Prospect title in-correct"
                      className="w-12 h-12 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={a1}
                      onChange={(e) => setA1(e.target.checked)}
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox-1"
                    className="ms-4 text-2xl font-medium text-gray-900 "
                  >
                    Prospect title in-correct
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <div>
                    <input
                      id="default-checkbox-2"
                      type="checkbox"
                      value="Prospect phone number wrong"
                      className="w-12 h-12 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={a2}
                      onChange={(e) => setA2(e.target.checked)}
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox-2"
                    className="ms-4 text-2xl font-medium text-gray-900 "
                  >
                    Prospect phone number wrong
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <div>
                    <input
                      id="default-checkbox-3"
                      type="checkbox"
                      value="Prospect didn’t answer"
                      className="w-12 h-12 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={a3}
                      onChange={(e) => setA3(e.target.checked)}
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox-3"
                    className="ms-4 text-2xl font-medium text-gray-900 "
                  >
                    Prospect didn’t answer
                  </label>
                </div>
              </div>
              <div className="w-full lg:w-5/12">
                <div className="flex flex-col gap-5">
                  <p className="text-2xl">Call Note</p>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={10}
                    cols={20}
                    className="w-full  border-2 border-gray-700 p-4"
                  ></textarea>
                  <button
                    onClick={saveButtonHandler}
                    className="py-5 px-10 bg-[#5236FF] hover:bg-[#422ae0] text-white text-2xl rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-300" />

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-20">
          <p className="text-[25px]">
            For any selling-side questions use this chat bot
          </p>
          <div className="bg-[#5236FF] p-4 rounded-lg mt-5">
            <p className="text-3xl text-white">Ask Sell-side Queries</p>
            <AiChat />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-20">
          <p className="text-[25px]">
            For any general questions use this chat bot
          </p>
          <p>
            (Note: this bot can answer general questions too, but can be less
            reliable sometimes. So double check responses)
          </p>
          <div className="bg-[#5236FF] p-4 rounded-lg mt-5">
            <p className="text-3xl text-white">AI Co-pilot</p>
            <AiChat />
          </div>
        </div>
      </section>

      {selectedFaq && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <p className="mb-5">{selectedFaq.q}</p>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {selectedFaq.a}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CallerDashboard;
