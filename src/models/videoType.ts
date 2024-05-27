export interface VideoSnippet {
  title: string;
  channelId: string; // videoDetail.tsx에서만 존재하므로 선택적 속성으로 처리
  channelTitle: string;
  description?: string; // videoDetail.tsx에서만 존재하므로 선택적 속성으로 처리
  thumbnails?: {
    medium: {
      url: string;
    };
  }; // videoCard.tsx에서만 존재하므로 선택적 속성으로 처리
  publishedAt?: string; // videoCard.tsx에서만 존재하므로 선택적 속성으로 처리
}

export interface VideoStatistics {
  viewCount: number;
}

export interface Video {
  id: string;
  snippet: VideoSnippet;
  statistics?: VideoStatistics;
}
