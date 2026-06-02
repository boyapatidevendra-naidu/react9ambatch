import Video1 from "../../public/dude--pradeep-ranganathan-mamitha-baiju--saiabhyankkar--keerthiswaran---singari-video-song.mp4";
import Video2 from "../../public/httpswwwyoutubecomwatchvwspjbiy0zv0.mp4";
import Video3 from "../../public/meesaya-murukku--music-video--hiphop-tamizha---sundar-c--avni---enna-nadanthalum.mp4";
import DisaplayVideos from "./DisaplayVideos";

const GroupOfVideos = ({ updateCurrentVideo, video }) => {
  let videos = [Video1, Video2, Video3];

  let filterVideos = videos.filter((value) => value !== video);
  
  return (
    <>
      <DisaplayVideos
        data={filterVideos}
        updateCurrentVideo={updateCurrentVideo}
      />
    </>
  );
};

export default GroupOfVideos;
