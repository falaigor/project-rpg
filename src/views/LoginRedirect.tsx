import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { storageAvaliable } from "Utils/storage";

const backendUrl = process.env.REACT_APP_STRAPI_API_URL;

export const LoginRedirect = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

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
        storageAvaliable("localStorage") &&
          localStorage.setItem("user_info", JSON.stringify(res));

        setTimeout(() => history.push("/"), 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history, location.search, params]);

  return <p></p>;
};
