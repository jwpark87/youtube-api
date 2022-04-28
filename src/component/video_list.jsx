import React, { useEffect } from "react";
import VideoItem from "./video_item";

const VideoList = (props) => {
  return (
    <div>
      {props.items.items.map((item) => {
        return <VideoItem key="{item.id}" item={item.snippet} />;
      })}
    </div>
  );
};

export default VideoList;
