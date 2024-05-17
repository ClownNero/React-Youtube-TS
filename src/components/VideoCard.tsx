import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

interface VideoSnippet {
  title: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
  channelTitle: string;
  publishedAt: string;
}

interface Video {
  id: string;
  snippet: VideoSnippet;
}

type VideoCardType = "list" | undefined;

interface VideoCardProps {
  video: Video;
  type?: VideoCardType;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, type }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
