import axios, { AxiosResponse } from "axios";

export interface YoutubeApiResponse {
  items: Array<{
    id: {
      videoId: string;
    };
    snippet: {
      thumbnails: {
        default: {
          url: string;
        };
      };
    };
  }>;
}

export interface ChannelResponse {
  items: Array<{
    snippet: {
      thumbnails: {
        default: {
          url: string;
        };
      };
    };
  }>;
}

export default class FakeYoutubeClient {
  async search({
    params,
  }: {
    params: { relatedToVideoId?: string };
  }): Promise<AxiosResponse<YoutubeApiResponse>> {
    return params.relatedToVideoId
      ? axios.get<YoutubeApiResponse>("/videos/related.json")
      : axios.get<YoutubeApiResponse>("/videos/search.json");
  }

  async videos(): Promise<AxiosResponse<YoutubeApiResponse>> {
    return axios.get<YoutubeApiResponse>("/videos/popular.json");
  }

  async channels(): Promise<AxiosResponse<ChannelResponse>> {
    return axios.get<ChannelResponse>("/videos/channel.json");
  }
}
