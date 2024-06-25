// Copyright Amazon.com, Incon. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import "amazon-connect-streams";
import React, { memo, useRef, useEffect, useState } from "react";
import CallButton from "./phone/CallButton.tsx";
import HangUpButton from "./phone/HangUpButton.tsx";

const ConnectCCP = ({ phoneNum }) => {
  const ref = useRef();
  const number = phoneNum.replace(/\D/g, "");

  const [con, setCon] = useState(null);
  const [buttonState, setButtonState] = useState("disabled");
  useEffect(() => {
    try {
      connect.core.initCCP(ref.current, {
        ccpUrl: "https://tbi-test-connect.my.connect.aws/connect/ccp-v2",
        region: "us-east-1",
        loginPopup: true, // optional, defaults to `true`
        loginPopupAutoClose: true, // optional, defaults to `true`
        loginOptions: {
          // optional, if provided opens login in new window
          autoClose: true, // optional, defaults to `false`
          height: 600, // optional, defaults to 578
          width: 400, // optional, defaults to 433
          top: 0, // optional, defaults to 0
          left: 0, // optional, defaults to 0
        },
        softphone: {
          // optional, defaults below apply if not provided
          allowFramedSoftphone: true, // optional, defaults to false
          disableRingtone: false, // optional, defaults to false
          // ringtoneUrl: "./ringtone.mp3" // optional, defaults to CCP’s default ringtone if a falsy value is set
        },
        pageOptions: {
          // optional
          enableAudioDeviceSettings: true, // optional, defaults to 'false'
          enablePhoneTypeSettings: true, // optional, defaults to 'true'
        },
        ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
        ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
        ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
      });
      global.connect.agent((agent) => {
        setButtonState("enabled");
        console.log("Agent initialized");

        // Handle agent state changes
        agent.onStateChange((state) => {
          console.log("Agent state changed:", state);
        });

        // Handle agent error
        agent.onError((error) => {
          console.error("Agent error:", error);
        });

        // Handle agent availability
        agent.onRoutableState((routableState) => {
          console.log("Agent routable state:", routableState);
        });
      });
      global.connect.contact(subscribeToContactEvents);
      console.log("initCCP end");
    } catch (error) {
      console.error("Error initializing CCP:", error);
    }

    return () => {
      if (con) disconnectCall();
    };
  }, [ref]);

  // var c;
  const subscribeToContactEvents = (contact) => {
    setCon(contact);
    // setButtonState("enabled");
    // console.log("Subscribing to events for contact");
    contact.onConnected(handleContactConnected);
    contact.onEnded(handleContactEnded);
  };

  const handleContactConnected = (contact) => {
    if (contact) {
      setButtonState("hangUpActived");
      console.log(
        "[contact.onConnected] Contact connected to agent. Contact state is " +
          contact.getStatus().type
      );
    } else {
      console.log(
        "[contact.onConnected] Contact connected to agent. Null contact passed to event handler"
      );
    }
  };

  const handleContactEnded = (contact) => {
    if (contact) {
      console.log(
        "[contact.onEnded] Contact has ended. Contact state is " +
          contact.getStatus().type
      );
      setButtonState("enabled");
      closeContact();
    } else {
      console.log(
        "[contact.onEnded] Contact has ended. Null contact passed to event handler"
      );
    }
  };

  const disconnectCall = () => {
    if (buttonState === "disabled") return;
    con.getAgentConnection().destroy({
      success: function () {
        console.log("Disconnected contact via Streams");
        closeContact(); // Call function to close the contact
      },
      failure: function () {
        console.log("Failed to disconnect contact via Streams");
      },
    });
  };

  const closeContact = () => {
    if (con) {
      con.clear(); // Clear the contact's resources
      console.log("Contact closed");
    }
    // Optionally, perform additional cleanup or state management specific to your application
  };

  const outboundCall = async () => {
    if (buttonState === "disabled") return;
    setButtonState("callActived");
    try {

    // var endpoint = connect.Endpoint.byPhoneNumber("+16179399237");
    // var agent = new connect.Agent();
    // //var queueArn = "arn:aws:connect:<REGION>:<ACCOUNT_ID>:instance/<CONNECT_INSTANCE_ID>/queue/<CONNECT_QUEUE_ID>";

    // agent.connect(endpoint, {
    //   queueARN:
    //     "arn:aws:lambda:us-east-1:373128336056:function:lambda-fetch-connect-transcript-im-immediateSender-8MxuyBvdgDud",
    //   success: function () {
    //     console.log("outbound call connected");
    //   },
    //   failure: function (err) {
    //     console.log("outbound call connection failed");
    //     console.log(err);
    //   },
    // });
  };

  return (
    <>
      <div ref={ref} style={{ display: "none" }} />
      <div className="flex justify-between mb-5">
        <CallButton status={buttonState} acceptHandler={outboundCall} />
        <HangUpButton status={buttonState} disconnectHandler={disconnectCall} />
      </div>
    </>
  );
};

export default memo(ConnectCCP);
