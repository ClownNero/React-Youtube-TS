import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";
import { Video } from "../models/videoType";

interface RelatedVideosProps {
  id: string; // 여기서 id의 타입을 명시합니다.
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[], Error>(
    ["related", id],
    () => youtube.relatedVideos(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😣</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
