import React from "react";
import { formatAgo } from "../util/date";
import { formatView } from "../util/view";
import { useNavigate, useParams } from "react-router-dom";
import { Video } from "../models/videoType";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

type VideoCardType = "list" | undefined;

interface VideoCardProps {
  video: Video;
  type?: VideoCardType;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, type }) => {
  const {
    title,
    thumbnails,
    channelId: id,
    channelTitle,
    publishedAt,
  } = video.snippet;
  const { youtube } = useYoutubeApi();
  const navigate = useNavigate();
  const { videoId } = useParams();
  const isList = type === "list";
  const viewCount = video.statistics?.viewCount;

  const { data: url } = useQuery<string, Error>(
    ["channel", id],
    () => youtube.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
      enabled: !isList,
    } // isList가 false일 때만 쿼리를 활성화
  );

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
      <div className={isList ? "" : "flex my-2"}>
        {!isList && url && (
          <img className="w-9 h-9 rounded-full" src={url} alt={channelTitle} />
        )}
        <div className={isList ? " " : "px-3"}>
          <p className={`line-clamp-2 ${isList ? "text-sm" : ""}`}>{title}</p>
          <p className={`opacity-70 ${isList ? "text-xs" : "text-sm"}`}>
            {channelTitle}
          </p>
          <p className={`opacity-70 ${isList ? "text-xs" : "text-sm"}`}>
            {viewCount ? `조회수 ${formatView(viewCount)}` : ""}{" "}
            {formatAgo(publishedAt)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
