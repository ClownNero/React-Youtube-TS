import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { Video } from "../models/videoType";
import { formatView } from "../util/view";
import { formatAgo } from "../util/date";
import { useYoutubeApi } from "../store/YoutubeApiStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// useLocation으로부터 반환되는 state의 타입을 정의하기 위한 인터페이스
interface LocationState {
  video: Video;
}

export default function VideoDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const state = location.state as LocationState; // Type assertion 사용
  const { video } = state;
  const { title, channelId, channelTitle, description, publishedAt } =
    video.snippet;
  const viewCount = video.statistics?.viewCount;
  const { youtube } = useYoutubeApi();
  const { data: subscriberCount } = useQuery<number, Error>(
    ["subscriber", channelId],
    () => youtube.channelSubscriber(channelId),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="mx-4 flex flex-col lg:flex-row ">
      <section className="basis-4/6">
        <iframe
          className="rounded-xl w-full aspect-video"
          key={video.id}
          id="player"
          width="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
        <article className="px-2 py-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo
            id={channelId}
            name={channelTitle}
            count={subscriberCount!}
          />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full bg-zinc-600 text-left rounded-xl p-3 cursor-pointer hover:brightness-110"
          >
            <div className={isOpen ? "" : "line-clamp-4"}>
              <p className="text-sm mb-2">
                {viewCount ? `조회수 ${formatView(viewCount)}` : ""}{" "}
                {formatAgo(publishedAt)}
              </p>
              <pre className="text-xs whitespace-pre-wrap">{description}</pre>
            </div>
          </button>
        </article>
      </section>
      <section className="basis-2/6 lg:pl-6">
        <RelatedVideos id={channelId} />
      </section>
    </div>
  );
}
