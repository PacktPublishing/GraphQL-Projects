import React from "react";

function Example() {
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
              <span className="text-white opacity-50 text-sm">Adam Wathan</span>
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
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/steveschoger/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Steve Schoger</span>
                <span className="text-gray-500 text-xs">11:46</span>
              </div>
              <p className="text-black leading-normal">
                The slack from the other side.
              </p>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/adamwathan/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Adam Wathan</span>
                <span className="text-gray-500 text-xs">12:45</span>
              </div>
              <p className="text-black leading-normal">
                How are we supposed to control the marquee space without an
                utility for it? I propose this:
              </p>
              <div className="bg-gray-200 border border-gray-400 text-gray-800 text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster; {"}"}
              </div>
            </div>
          </div>
          {/* A message */}
          <div className="flex items-start mb-4 text-sm">
            <img
              src="https://twitter.com/davidhemphill/profile_image"
              className="w-10 h-10 rounded mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">David Hemphill</span>
                <span className="text-gray-500 text-xs">12:46</span>
              </div>
              <p className="text-black leading-normal">
                <a
                  href="#"
                  className="inline-block bg-blue-100 text-blue-500 no-underline"
                >
                  @Adam Wathan
                </a>{" "}
                the size of the generated CSS is creating a singularity in
                space/time, we must stop adding more utilities before it's too
                late!
              </p>
            </div>
          </div>
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

export default Example;
