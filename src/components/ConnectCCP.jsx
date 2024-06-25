// Copyright Amazon.com, Incon. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { memo, useRef, useState } from "react";
import axios from "axios";
import CallButton from "./phone/CallButton.tsx";
import HangUpButton from "./phone/HangUpButton.tsx";

const ConnectCCP = ({ phoneNum }) => {
  const ref = useRef();
  const [contactId, setContactId] = useState("");
  const [number, setNumber] = useState("1" + phoneNum.replace(/\D/g, ""));

  const [buttonState, setButtonState] = useState("enabled");

  const outBoundCall = async () => {
    setButtonState("callActived");
    try {
      const { data } = await axios.get(
        `https://o2xpogtamg.execute-api.us-east-1.amazonaws.com/dev/GetConnectManager?destPhone=%2B${number}&queueARN=695227e1-08a7-41ff-b42e-1fd6f882ea55`
      );
      setContactId(JSON.parse(data.body).ContactId);
      setButtonState("hangUpActived");
    } catch (error) {
      console.log("error", error);
    }
  };

  const disconnectCall = async () => {
    try {
      console.log(contactId);
      const { data } = await axios.get(
        `https://o2xpogtamg.execute-api.us-east-1.amazonaws.com/dev/HangUp?contactId=${contactId}`
      );
      console.log(data);
      setButtonState("enabled");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div ref={ref} style={{ display: "none" }} />
      <div className="flex justify-between mb-5">
        <CallButton status={buttonState} acceptHandler={outBoundCall} />
        <HangUpButton status={buttonState} disconnectHandler={disconnectCall} />
      </div>
    </>
  );
};

export default memo(ConnectCCP);
