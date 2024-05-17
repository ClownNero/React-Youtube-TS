import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

// video 객체의 snippet 부분을 위한 인터페이스 정의
interface VideoSnippet {
  title: string;
  channelId: string;
  channelTitle: string;
  description: string;
}

// video 객체를 위한 인터페이스 정의
interface Video {
  id: string;
  snippet: VideoSnippet;
}

// useLocation으로부터 반환되는 state의 타입을 정의하기 위한 인터페이스
interface LocationState {
  video: Video;
}

export default function VideoDetail() {
  const location = useLocation();
  const state = location.state as LocationState; // Type assertion 사용
  const { video } = state;
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
