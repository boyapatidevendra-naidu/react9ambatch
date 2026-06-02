import { useRef, useState } from "react";
const DisaplayVideos = ({ data, updateCurrentVideo }) => {
  let videoRef = useRef([]);

  let handlePlay = (index) => {
    videoRef.current[index]?.play();
  };

  let handlePause = (index) => {
    videoRef.current[index]?.pause();
  };
  return (
    <>
      {data.map((video, index) => {
        return (
          <aside>
            <video
              src={video}
              ref={(data) => (videoRef.current[index] = data)}
              onMouseEnter={() => {
                handlePlay(index);
              }}
              onMouseLeave={() => handlePause(index)}
              onClick={() => updateCurrentVideo(video)}
              muted
            ></video>
          </aside>
        );
      })}
    </>
  );
};

export default DisaplayVideos;
