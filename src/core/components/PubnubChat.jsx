import React from "react";
import { Chat, MessageList, MessageInput, useChannels, ChannelList, useUser } from "@pubnub/react-chat-components";
import CustomInput from "./CustomInput";
import { useState } from "react";
import useData from "../hooks/useData";
import { usePubNub } from "pubnub-react";
import ClipLoader from "react-spinners/ClipLoader";

const PubnubChat = ({ channels = [], currentChannel, welcomeMessageText = false, onBeforeSend = false, onSend }) => {
  return (
    <Chat channels={channels} currentChannel={currentChannel}>
      <div className="bg-primary" style={{ height: "39rem" }}>
        <MessageList
          fetchMessages={10}
          welcomeMessages={
            welcomeMessageText
              ? {
                  message: {
                    text: welcomeMessageText,
                    type: "default",
                  },
                  timetoken: "16600269704007051",
                }
              : false
          }
          messageRenderer={(props) => <PubnubMessageList {...props} />}
        />
      </div>
      <MessageInput placeholder="Halo! apakah barang ini ready?" fileUpload="image" onBeforeSend={onBeforeSend} onSend={onSend} />
    </Chat>
  );
};

const PubnubMessageList = (props) => {
  function getMessage(message) {
    if (message.message.messageType == "productDetail")
      return (
        <div className="row">
          <div className="col">
            <img width={300} src={message.message.productImage} alt="Image" />
          </div>
          <div className="col">
            <p className="font-weight-bold m-0 p-0">{message.message.productName}</p>
            {message.message.productVariant && <span className="badge bg-primary text-white mb-1 mt-0">{message.message.productVariant}</span>}
            <p className="font-weight-bold">{message.message.productPrice}</p>
          </div>
        </div>
      );
    else if (message?.messageType === 4) return <img src={message.message.file.url} alt={message.message.file.name} />;

    return <p>{message.message.text}df</p>;
  }

  return (
    <div style={{ maxWidth: "40rem" }}>
      {getMessage(props.message)}
      <span style={{ float: "right", fontSize: 13 }}>{props.time}</span>
    </div>
  );
};

export default PubnubChat;
