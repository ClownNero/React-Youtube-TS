// import { ReactNode, createContext, useContext, Context } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import { create } from "zustand";

// Youtube와 YoutubeClient의 인스턴스 타입을 정의합니다.
// 여기에서는 예시로 any 타입을 사용했습니다. 실제 프로젝트에서는 구체적인 타입을 사용해야 합니다.
// 예를 들어, Youtube와 YoutubeClient 타입을 아래와 같이 지정할 수 있습니다. (실제 타입으로 교체 필요)
// interface YoutubeApiContextType {
//   youtube: Youtube;
// }

// // createContext의 generic type을 사용하여 컨텍스트의 타입을 명확하게 합니다.
// export const YoutubeApiContext: Context<YoutubeApiContextType | undefined> =
//   createContext<YoutubeApiContextType | undefined>(undefined);

// const client = new YoutubeClient();
// const youtube = new Youtube(client);

// // YoutubeApiProvider의 props 타입을 정의합니다.
// interface YoutubeApiProviderProps {
//   children: ReactNode;
// }

// export function YoutubeApiProvider({ children }: YoutubeApiProviderProps) {
//   return (
//     <YoutubeApiContext.Provider value={{ youtube }}>
//       {children}
//     </YoutubeApiContext.Provider>
//   );
// }

// useYoutubeApi 훅에서 반환되는 값의 타입을 YoutubeApiContextType으로 지정합니다.
// export function useYoutubeApi(): YoutubeApiContextType {
//   const context = useContext(YoutubeApiContext);
//   if (context === undefined) {
//     throw new Error("useYoutubeApi must be used within a YoutubeApiProvider");
//   }
//   return context;
// }

// zustand를 사용하니 확실히 코드 수가 줄어듦.
// 초기 설정 및 관리 용이하다.
interface YoutubeApiState {
  youtube: Youtube;
}

const useYoutubeApiStore = create<YoutubeApiState>((set) => ({
  youtube: new Youtube(new YoutubeClient()),
}));

export function useYoutubeApi() {
  return useYoutubeApiStore((state) => state);
}
