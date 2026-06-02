import  { useRef, useState } from "react";

const CurrentVideo = ({ video }) => {
  let [play, setPlay] = useState(false);
  let videoRef = useRef();
  let handlePlay = () => {
    if (play) {
      videoRef.current?.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <>
      <video src={video} ref={videoRef} onClick={handlePlay}></video>
    </>
  );
};

export default CurrentVideo;
