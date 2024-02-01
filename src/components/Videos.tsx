import { Stack, Box } from "@mui/material";
import { Video } from "../types/types";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { FC } from "react";
import Loader from "./Loader";
import { ResponsiveStyleValue } from '@mui/system';

const Videos: FC<{ videos: Video[] | null, dir?: string }> = ({ videos, dir }) => {
  if(!videos?.length) return <Loader />;

  const directionValue = dir as ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse"> ?? "row";
  
  return (
    <Stack direction={directionValue} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
