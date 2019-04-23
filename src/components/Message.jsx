import React, { useState } from "react";
import { UPDATE_MESSAGE } from "../queries";
import { useMutation } from "react-apollo-hooks";
import { format } from "timeago.js";

function Message({ id, username: name, timestamp: time, text: message }) {
  const [hovered, setHovered] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [messageState, setMessageState] = useState(message);
  const updateMessage = useMutation(UPDATE_MESSAGE, {});
  if (editMode) {
    return (
      <div className="flex flex-wrap">
        <div className="w-full">
          <textarea
            className="w-full"
            value={messageState}
            onChange={e => setMessageState(e.target.value)}
          />
        </div>
        <div className="flex">
          <input
            type="button"
            className="py-1 px-1 rounded bg-gray-300"
            onClick={() => setEditMode(false)}
            value="Cancel"
          />
          <input
            type="button"
            onClick={() =>
              updateMessage({
                variables: { id, text: messageState },
              }).then(() => setEditMode(false))
            }
            className="bg-green-500 py-1 px-2 rounded ml-2"
            value="Save"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-start mb-4 text-sm"
      >
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">{name}</span>
            <span className="p-1 text-gray-500 text-xs">{format(time)}</span>
            {hovered && (
              <input
                type="button"
                onClick={() => setEditMode(true)}
                className="py-1 px-1 rounded float-right"
                value="Edit"
              />
            )}
          </div>
          <p className="text-black leading-normal">{message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
