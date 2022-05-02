import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import VideoItem from "./video_item";

const VideoList = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        {props.items.items.map((item) => {
          return (
            <Grid item xs={6}>
              <VideoItem key={item.id} item={item.snippet} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default VideoList;
