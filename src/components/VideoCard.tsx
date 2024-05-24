import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
import { Video } from "../models/videoType";

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
      className={isList ? "flex gap-1 m-2 cursor-pointer" : "cursor-pointer"}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-2 rounded-md" : "w-full rounded-md"}
        src={thumbnails?.medium.url}
        alt={title}
      />
      <div>
        <p className="my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-70">{channelTitle}</p>
        <p className="text-sm opacity-70">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
