"use client";

import axios from "axios";
import { useState } from "react";

const AiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any>([]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    // Make a request to the ChatGPT API with the user input
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/chatbot`,
      { input: input }
    );

    // Update the conversation history with the response from ChatGPT
    setMessages([...messages, { role: "assistant", content: response.data }]);

    // Clear the input field
    setInput("");
  };

  return (
    <>
      <div className="bg-white px-5 py-10 mt-5 rounded-sm">
        <div className="h-[500px] overflow-y-auto">
          {messages.map((message: any, index: number) => (
            <div key={index} className={message.role}>
              <div className="mb-5">{message.content}</div>
            </div>
          ))}
        </div>

        <textarea
          className="w-full p-5 mb-5 border border-gray-800"
          placeholder="Type free form query here"
          rows={2}
          value={input}
          onChange={handleInputChange}
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="py-5 px-10 bg-[#5236FF] hover:bg-[#422ae0] text-white text-xl rounded-full"
        >
          Get Answer
        </button>
      </div>
    </>
  );
};

export default AiChat;
