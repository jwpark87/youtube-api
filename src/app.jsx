import React, { useState, useEffect } from "react";
import "./app.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import VideoList from "./component/video_list";
import Navbar from "./component/navbar";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Navbar onSearch={search} />
          <VideoList items={videos} />
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
