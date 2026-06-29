import { useContext, useEffect, useState } from "react";
import { postContext } from "../../Utilities";
import Style from "./homepage.module.css";

import { FaHeart, FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const HomePage = () => {
  let { fetchPosts, posts } = useContext(postContext);
  let [color, setColor] = useState({});
  useEffect(() => {
    fetchPosts();
  }, []);
  let handleColor = () => {
    setColor({ color: "red" });
  };
  return (
    <section className={Style.mainContainer}>
      {posts.map((post) => {
        return (
          <article className={Style.postContainer}>
            <figure>
              <img src={post.image} alt="" />
              <figcaption>{post.caption}</figcaption>
            </figure>
            <div>
              <span>
                <FaHeart style={color} onDoubleClick={handleColor} />
              </span>
              <span>
                <FaRegComment />
              </span>
              <span>
                <RiShareForwardLine />
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default HomePage;
