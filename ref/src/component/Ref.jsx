import { useRef, useState } from "react";

import Image1 from "../../public/Nee-Singam-Dhan-Trending-Version-Tamil-2023-20230515214914-500x500-1.jpg";
import Video1 from "../../public/dude--pradeep-ranganathan-mamitha-baiju--saiabhyankkar--keerthiswaran---singari-video-song.mp4";

const Ref = () => {
  let [songPlay, setSongPlay] = useState(false);
  //   let inputRef = useRef();
  //   let refFunction = () => {
  //     console.log(inputRef.current);
  //     // inputRef.current.focus()
  //     console.log(inputRef.current.value);
  //   };

  let playSong = () => {
    if (songPlay) {
      audioRef.current.pause();
      setSongPlay(false);
    } else {
      audioRef.current.play();
      setSongPlay(true);
    }
  };

  let videoRef = useRef();
  let handleVideo = () => {
    if (songPlay) {
      videoRef.current.pause();
      setSongPlay(false);
    } else {
      videoRef.current.play();
      setSongPlay(true);
    }
  };
  let audioRef = useRef();
  return (
    <div>
      {/* <input type="text" ref={inputRef} />
      <button onClick={refFunction}>Submit</button> */}

      <img src={Image1} alt="" onClick={playSong} />
      <audio
        src="../../public/Nee-Singam-Dhan-A.R.-Rahman-NaaSongs.mp3"
        ref={audioRef}
      ></audio>

      <video src={Video1} ref={videoRef} onClick={handleVideo}></video>
    </div>
  );
};

export default Ref;
