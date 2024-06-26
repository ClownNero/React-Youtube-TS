import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  ChannelsResponse,
  SearchResponse,
  SubscribersResponse,
  VideosResponse,
} from "../models/apiTypes";

export default class YoutubeClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: object): Promise<AxiosResponse<SearchResponse>> {
    return this.httpClient.get<SearchResponse>("search", params);
  }

  async videos(params: object): Promise<AxiosResponse<VideosResponse>> {
    return this.httpClient.get<VideosResponse>("videos", params);
  }

  async channels(params: object): Promise<AxiosResponse<ChannelsResponse>> {
    return this.httpClient.get<ChannelsResponse>("channels", params);
  }
  async subscribers(
    params: object
  ): Promise<AxiosResponse<SubscribersResponse>> {
    return this.httpClient.get<SubscribersResponse>("channels", params);
  }
}
