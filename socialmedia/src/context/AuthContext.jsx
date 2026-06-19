import { useState } from "react";
import { authContext, baseUrl } from "../Utilities";
let AuthProvider = ({ children }) => {
  let [data, setData] = useState({
    addResponse: null,
  });
  let { addResponse } = data;
  let addUser = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      setData({ ...data, addResponse: response.status });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ addUser, addResponse }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
