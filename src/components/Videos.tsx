import { Stack, Box } from "@mui/material";
import { Video } from "../types/types";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { FC } from "react";

const Videos: FC<{ videos: Video[] | null }> = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos
        ? videos.map((item: Video, index: number) => (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        : null}
    </Stack>
  );
};

export default Videos;
