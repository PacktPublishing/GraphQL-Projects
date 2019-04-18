import React, { useState } from "react";
import { GET_USER, ADD_USER } from "../queries";
import { useMutation, useQuery } from "react-apollo-hooks";

function Login({ usernameSelected }) {
  const [username, setUsername] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const addUser = useMutation(ADD_USER, { variables: { username: username } });

  const { data: userData, loading: userLoading } = useQuery(GET_USER, {
    variables: { username: username },
    skip: !creatingUser,
  });

  if (creatingUser && userData && userData.matching_user) {
    if (userData.matching_user.matches.count === 0) {
      addUser().then(() => {
        usernameSelected(username);
      });
    } else {
      usernameSelected(username);
    }
  }
  if (userLoading || creatingUser) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={e => {
          e.preventDefault();
          setCreatingUser(true);
        }}
      >
        <input
          className="rounded px-2 py-2"
          onChange={e => setUsername(e.target.value)}
          type="text"
          value={username}
          placeholder="Choose a username"
        />
      </form>
    </div>
  );
}

export default Login;
