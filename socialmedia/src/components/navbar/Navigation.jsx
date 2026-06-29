import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Utilities";

const Navigation = () => {
  let { userId } = useContext(authContext);

  return <div>{userId && <Link to="/addPost">Add Post</Link>}</div>;
};

export default Navigation;
