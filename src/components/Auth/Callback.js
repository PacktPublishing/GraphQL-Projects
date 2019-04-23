import React, { useContext } from "react";
import Auth from "./Auth";
import AuthContext from "./AuthContext";
import Loading from "../Loading";

const auth = new Auth();
function Callback() {
  const auth = useContext(AuthContext);
  auth.handleAuthentication();

  return <Loading />;
}

export default Callback;
