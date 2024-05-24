import { AxiosResponse } from "axios";
import {
  ChannelsResponse,
  SearchResponse,
  VideosResponse,
} from "../models/apiTypes";
// YouTube API 응답을 위한 인터페이스 정의

// apiClient 인터페이스 정의
interface ApiClient {
  search(params: object): Promise<AxiosResponse<SearchResponse>>;
  videos(params: object): Promise<AxiosResponse<VideosResponse>>;
  channels(params: object): Promise<AxiosResponse<ChannelsResponse>>;
}

// Youtube 클래스에 대한 타입 정의
export default class Youtube {
  private apiClient: ApiClient;
  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword: string): Promise<any> {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string): Promise<string> {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.medium.url);
  }
  async relatedVideos(id: string): Promise<Array<{ id: string } & any>> {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          regionCode: "KR",
          channelId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
  // TypeScript에서 private 메서드를 정의할 때 #을 사용
  async #searchByKeyword(
    keyword: string
  ): Promise<Array<{ id: string } & any>> {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
          regionCode: "KR",
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.channelId }))
      );
  }
  async #mostPopular(): Promise<any> {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
          regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }
}
