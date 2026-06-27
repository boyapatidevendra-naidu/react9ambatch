import { useState } from "react";
import { postContext } from "./../Utilities";
let PostProvider = ({ children }) => {
  let [postResponse, setPostResponse] = useState({ addResponse: null });
  let addPost = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <postContext.Provider value={{ addPost }}>{children}</postContext.Provider>
  );
};
export default PostProvider;
