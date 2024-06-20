import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate, useParams } from "react-router-dom";
import { Video } from "../models/videoType";
import { formatView } from "../util/view";

type VideoCardType = "list" | undefined;

interface VideoCardProps {
  video: Video;
  type?: VideoCardType;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, type }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const viewCount = video.statistics?.viewCount;
  const { videoId } = useParams();
  const isList = type === "list";
  return (
    <li
      className={
        isList ? "flex gap-1 mx-2 mb-3 cursor-pointer" : "cursor-pointer"
      }
      onClick={() => {
        // 현재 페이지의 videoId와 클릭된 비디오의 id가 같지 않을 경우에만 navigate를 실행합니다.
        if (video.id.toString() !== videoId) {
          navigate(`/videos/watch/${video.id}`, { state: { video: video } });
        }
      }}
    >
      <img
        className={isList ? "w-48 mr-2 rounded-xl" : "w-full rounded-xl"}
        src={thumbnails?.medium.url}
        alt={title}
      />
      <div>
        <p className="mt-2 mb-1 line-clamp-2">{title}</p>
        <p className="text-sm opacity-70">{channelTitle}</p>
        {isList ? (
          ""
        ) : (
          <span className="text-sm opacity-70 after:content-['•']">
            {viewCount ? `조회수 ${formatView(viewCount)} ` : " "}
          </span>
        )}
        <span className="text-sm opacity-70"> {formatAgo(publishedAt)}</span>
      </div>
    </li>
  );
};

export default VideoCard;
