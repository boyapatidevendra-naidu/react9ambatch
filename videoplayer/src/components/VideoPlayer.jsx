import { useState } from "react";
import CurrentVideo from "./CurrentVideo";
import GroupOfVideos from "./GroupOfVideos";
import Style from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  let [currentVideo, setCurrentVideo] = useState("");

  let updateCurrentVideo = (video) => {
    setCurrentVideo(video);
  };
  return (
    <section className={Style.videoContainer}>
      <article>
        <CurrentVideo video={currentVideo} />
      </article>
      <article>
        <GroupOfVideos updateCurrentVideo={updateCurrentVideo} video={currentVideo} />
      </article>
    </section>
  );
};

export default VideoPlayer;
