import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const VideoItem = ({ item }) => {
  return (
    <Card sx={{ gap: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.thumbnails.medium.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoItem;
