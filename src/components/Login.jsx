import React, { useState } from "react";
import { GET_USER, ADD_USER } from "../queries";
import { useMutation, useQuery } from "react-apollo-hooks";

function Login({ onLogin }) {
  const [login, setLogin] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const addUser = useMutation(ADD_USER, { variables: { username: login } });

  const { data: userData, loading: userLoading } = useQuery(GET_USER, {
    variables: { username: login },
    skip: !loggingIn,
  });

  if (loggingIn && userData && userData.matching_user) {
    if (userData.matching_user.matches.count === 0) {
      addUser().then(() => {
        onLogin(login);
      });
    } else {
      onLogin(login);
    }
  }
  if (userLoading || loggingIn) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={e => {
          e.preventDefault();
          setLoggingIn(true);
        }}
      >
        <input
          className="rounded px-2 py-2"
          onChange={e => setLogin(e.target.value)}
          type="text"
          value={login}
          placeholder="Choose a username"
        />
      </form>
    </div>
  );
}

export default Login;
