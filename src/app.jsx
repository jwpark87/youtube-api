import React, { useState, useEffect } from "react";
import "./app.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import VideoList from "./component/video_list";
import Navbar from "./component/navbar";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("park");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBv3QX7UPTnZj8nRqPBkYxK_WnTx3Q-0jw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideos(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Navbar />
          <VideoList items={videos} />
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
