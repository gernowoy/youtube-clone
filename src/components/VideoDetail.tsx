import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import Loader from "./Loader";
import { Video } from "./../types/types";

import { fetchAPI } from "../utils/fetchAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[] | null>(null);
  const { id } = useParams();

  useEffect(() => {

    fetchAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0] as Video);
      });
  
    fetchAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
      .then((data) => {
        console.log(data.items);
        
        setVideos(data.items as Video[]);
      });
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} dir="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
