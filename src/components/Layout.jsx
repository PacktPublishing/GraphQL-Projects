import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_MESSAGES } from "../queries";
import ChatWindow from "./ChatWindow";

function Example() {
  const { data, loading } = useQuery(GET_MESSAGES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data.message) {
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
          <ChatWindow messages={data.message} />
        </div>
      </div>
    );
  }
}

export default Example;
