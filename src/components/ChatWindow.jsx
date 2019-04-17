import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { ADD_MESSAGE, GET_MESSAGES } from "../queries";
function renderMessage({ id, username: name, timestamp: time, text: message }) {
  return (
    <div key={id} className="flex items-start mb-4 text-sm">
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold">{name}</span>
          <span className="p-1 text-gray-500 text-xs">{time}</span>
        </div>
        <p className="text-black leading-normal">{message}</p>
      </div>
    </div>
  );
}

function ChatWindow({ messages }) {
  const renderedMessages = messages.map(renderMessage);
  return (
    <React.Fragment>
      <div className="px-6 py-4 flex-1 overflow-y-scroll">
        {renderedMessages}
      </div>
      <SubmitMessage />
    </React.Fragment>
  );
}

function SubmitMessage() {
  const addMessage = useMutation(ADD_MESSAGE, {
    refetchQueries: [{ query: GET_MESSAGES }],
  });
  const [message, setMessage] = useState();
  const handleSubmission = e => {
    e.preventDefault();
    addMessage({
      variables: {
        text: message,
        username: "maxim",
      },
    }).then(() => setMessage(""));
  };
  return (
    <div className="pb-6 px-4 flex-none">
      <div className="flex rounded-lg border-2 border-gray-500 border-solid overflow-hidden">
        <span className="border-0 border-solid text-3xl text-gray-500 border-r-2 border-gray-500 p-2">
          <svg
            className="fill-current h-6 w-6 block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
          </svg>
        </span>
        <form className="flex w-full" onSubmit={handleSubmission}>
          <input
            type="text"
            className="w-full px-4"
            placeholder="Message #general"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
