import { useEffect, useState, useContext } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { UserContext } from "Hooks/UserContext";

const backendUrl = process.env.REACT_APP_STRAPI_API_URL;

const LoginRedirect = () => {
  const [text, setText] = useState("Loading...");
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { setData: setGlobalState } = useContext(UserContext);

  useEffect(() => {
    fetch(`${backendUrl}/auth/auth0/callback${location.search}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        setUsername(res.user.username);
        setEmail(res.user.email);
        setGlobalState({ username, email });

        localStorage.setItem("jwt", res.jwt);
        setTimeout(() => history.push("/"), 0);
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please see the developer console.");
      });
  }, [history, location.search, params, email, setGlobalState, username]);

  return <p>{text}</p>;
};

export default LoginRedirect;
