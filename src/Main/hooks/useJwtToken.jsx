import { useEffect, useState } from "react";

const useJwtToken = (email) => {
  console.log("useJwtToken email", email);
  const [token, setToken] = useState("");
  console.log(email);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/v1/users/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            console.log(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useJwtToken;
