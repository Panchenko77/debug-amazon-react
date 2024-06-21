"use client";

import { useState } from "react";
import FeedbackBox from "./FeedbackBox";

interface Props {
  title: string;
  body: string;
  uuid: string;
}

const Accordion = ({ title, body, uuid }: Props) => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <p className="text-2xl">{title}</p>
        <button
          onClick={() => setopen(!open)}
          className="bg-black h-8 w-8 flex items-center justify-center text-white rounded-full "
        >
          {open === false ? "+" : "-"}
        </button>
      </div>

      {open === true ? (
        <div>
          <p className="mt-5">{body}</p>
          <FeedbackBox sectionTitle={uuid} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Accordion;
