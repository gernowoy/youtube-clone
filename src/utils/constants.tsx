import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export const logo = 'https://i.ibb.co/b7SPN9v/outubeicon-3560543.png';

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Gaming', icon: <VideogameAssetIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
] as const;

export const demoThumbnailUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/db/Nature_journal_logo.svg';
export const demoChannelUrl = '/@NatureVideoChannel';
export const demoVideoUrl = '/watch?v=f70ME-IfeMU';
export const demoChannelTitle = 'Nature Video';
export const demoVideoTitle = "What ChatGPT is and what it's not: A three minute guide";
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'