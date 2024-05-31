import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import { formatView } from "../util/view";

// Props에 대한 인터페이스 정의
interface ChannelInfoProps {
  id: string;
  name: string;
  count: number;
}

export default function ChannelInfo({ id, name, count }: ChannelInfoProps) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery<string, Error>(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="flex my-4 mb-6 items-start">
      {url && <img className="w-9 h-9 rounded-full" src={url} alt={name} />}
      <div className="ml-3">
        <p className="font-medium">{name}</p>
        <p className="text-xs opacity-70">{`구독자 ${formatView(count)}`}</p>
      </div>
    </div>
  );
}
