import { categories } from "../utils/constants";

const categoryNames = categories.map((category) => category.name);
export type CategoryName = (typeof categoryNames)[number];

export interface SidebarProps {
  selectedCategory: CategoryName;
  setSelectedCategory: (category: CategoryName) => void;
}

export interface Video {
  kind: string;
  id: ID;
  snippet: Snippet;
  statistics?: { subscriberCount?: string };
}

export interface ID {
  kind: string;
  videoId?: string;
  channelId?: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}
