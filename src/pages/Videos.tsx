import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { Video } from "../models/videoType";
import LoadingIndicator from "../components/UI/LoadingIndicator";

export default function Videos() {
  const { keyword } = useParams<{ keyword: string }>();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[], Error>(
    ["videos", keyword],
    () => youtube.search(keyword!),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  console.log(videos);
  return (
    <>
      {isLoading && <LoadingIndicator />}
      {error && <p>Something is wrong 😣</p>}
      {videos && (
        <ul className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-4">
          {" "}
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
