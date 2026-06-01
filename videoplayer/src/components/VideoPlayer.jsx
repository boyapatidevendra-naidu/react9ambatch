
import CurrentVideo from "./CurrentVideo";
import GroupOfVideos from "./GroupOfVideos";
import Style from "./VideoPlayer.module.css"

const VideoPlayer = () => {
  return (
    <section className={Style.videoContainer}>
      <article>
        <CurrentVideo />
      </article>
      <article>
        <GroupOfVideos />
      </article>
    </section>
  );
};

export default VideoPlayer;
