import React from "react";
import Message from "./Message";
import NewMessage from "./NewMessage";

function ChatWindow({ messages }) {
  const renderedMessages = messages.map(message => (
    <Message key={message.id} {...message} />
  ));
  return (
    <React.Fragment>
      <div className="px-6 py-4 flex-1 overflow-y-scroll">
        {renderedMessages}
      </div>
      <NewMessage />
    </React.Fragment>
  );
}

export default ChatWindow;
