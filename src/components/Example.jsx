import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_MESSAGES } from "../queries";

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
function Example() {
  const { data, loading } = useQuery(GET_MESSAGES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data.message) {
    const messages = data.message;
    const renderedMessages = messages.map(renderMessage);
    return (
      <div className="font-sans antialiased h-screen flex">
        {/* Sidebar / channel list */}
        <div className="bg-indigo-800 text-purple-200 flex-none w-64 pb-6 hidden md:block">
          <div className="text-white mb-2 mt-3 px-4 flex justify-between">
            <div className="flex-auto">
              <h1 className="font-semibold text-xl leading-tight mb-1 truncate">
                GraphQL Projects
              </h1>
              <div className="flex items-center mb-6">
                <svg
                  className="h-2 w-2 fill-current text-green-500 mr-2"
                  viewBox="0 0 20 20"
                >
                  <circle cx={10} cy={10} r={10} />
                </svg>
                <span className="text-white opacity-50 text-sm">maxim</span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="px-4 mb-2 text-white flex justify-between items-center">
              <div className="opacity-75">Channels</div>
            </div>
            <div className="bg-teal-600 py-1 px-4 text-white"># general</div>
          </div>
          <div />
        </div>
        {/* Chat content */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Top bar */}
          <div className="border-b flex px-6 py-2 items-center flex-none">
            <div className="flex flex-col">
              <h3 className="text-gray-800 mb-1 font-extrabold">#general</h3>
              <div className="text-gray-600 text-sm truncate">
                General chat about GraphQL Projects
              </div>
            </div>
          </div>
          {/* Chat messages */}
          <div className="px-6 py-4 flex-1 overflow-y-scroll">
            {renderedMessages}
          </div>
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
              <input
                type="text"
                className="w-full px-4"
                placeholder="Message #general"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
