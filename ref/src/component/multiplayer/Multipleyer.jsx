import { useState } from "react";
import Image1 from "../../../public/Nee-Singam-Dhan-Trending-Version-Tamil-2023-20230515214914-500x500-1.jpg";

import Image2 from "../../../public/image.png";
import Song1 from "../../../public/Nee-Singam-Dhan-A.R.-Rahman-NaaSongs.mp3";
import Song2 from "../../../public/Adhi Dha Surprisu.mp3";
import Music from "./Music";
const Multipleyer = () => {
  let songsArray = [
    {
      song: Song1,
      image: Image1,
    },
    {
      song: Song2,
      image: Image2,
    },
  ];

  return (
    <div>
      <Music songs={songsArray} />
    </div>
  );
};

export default Multipleyer;
