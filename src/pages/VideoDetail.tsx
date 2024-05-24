import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { Video } from "../models/videoType";

// useLocation으로부터 반환되는 state의 타입을 정의하기 위한 인터페이스
interface LocationState {
  video: Video;
}

export default function VideoDetail() {
  const location = useLocation();
  const [video, setVideo] = useState<Video | null>(null);
  useEffect(() => {
    const state = location.state as LocationState; // Type assertion 사용
    setVideo(state.video);
    console.log(location);
  }, [location]);

  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="mx-4 flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          className="rounded-xl"
          key={video.id}
          id="player"
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
        ``
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
