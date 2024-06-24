// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import "amazon-connect-streams";
import axios from "axios";
import React, { memo, useRef, useEffect } from "react";
import CallButton from "./phone/CallButton.tsx";
import HangUpButton from "./phone/HandUpButton.tsx";

const ConnectCCP = ({ phoneNum }) => {
  const ref = useRef();
  const number = phoneNum.replace(/\D/g, "");
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
      // Cleanup: Disconnect from Amazon Connect when component unmounts
    };
  }, [ref]);

  var c;
  const subscribeToContactEvents = (contact) => {
    c = contact;
    console.log("Subscribing to events for contact");
    contact.onConnected(handleContactConnected);
    contact.onEnded(handleContactEnded);
  };

  const handleContactConnected = (contact) => {
    if (contact) {
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
      //contact.clear();
    } else {
      console.log(
        "[contact.onEnded] Contact has ended. Null contact passed to event handler"
      );
    }
  };

  const disconnectCall = () => {
    c.getAgentConnection().destroy({
      success: function () {
        console.log("Disconnected contact via Streams");
      },
      failure: function () {
        console.log("Failed to disconnect contact via Streams");
      },
    });
  };

  const ouboundCall = () => {
    var endpoint = connect.Endpoint.byPhoneNumber("+1" + number);
    var agent = new connect.Agent();
    //var queueArn = "arn:aws:connect:<REGION>:<ACCOUNT_ID>:instance/<CONNECT_INSTANCE_ID>/queue/<CONNECT_QUEUE_ID>";

    agent.connect(endpoint, {
      //queueARN: queueArn,
      success: function () {
        console.log("outbound call connected");
      },
      failure: function (err) {
        console.log("outbound call connection failed");
        console.log(err);
      },
    });
  };

  return (
    <>
      <div ref={ref} style={{ display: "none" }} />
      <div className="flex justify-between mb-5">
        <CallButton acceptHandler={ouboundCall} />
        <HangUpButton disconnectHandler={disconnectCall} />
      </div>
    </>
  );
};

export default memo(ConnectCCP);
