import { useRef, useState } from "react";

const Music = ({ songs }) => {
  let audioRef = useRef();
  let [song, setSong] = useState("");
  let handlePlay = (songPlaying) => {
    if (song === songPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = songPlaying;
      audioRef.current.play();
    }
  };
  return (
    <div>
      {songs.map((value) => {
        return (
          <article>
            <img
              src={value.image}
              alt=""
              onClick={() => {
                handlePlay(value.song);
                setSong(value.song);
              }}
              height="200px"
              width="200px"
            />
            <audio ref={audioRef}></audio>
          </article>
        );
      })}
    </div>
  );
};

export default Music;
