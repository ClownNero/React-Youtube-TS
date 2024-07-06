<h1>🔥React-Youtube TS 리팩토링🔥</h1>

## 프로젝트 소개

<p align="center">
  <img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/86d0bfa2-92ee-478c-9c53-37b5dad1e065"
    width="70%"/>
</p>

- Youtube API를 활용한 유튜브 클론코딩 웹페이지.
- 개발기간: 2024.05.20 ~ 2024.06.20 (1개월).

<br/>

## 🔗 배포

> <h3>👉 https://react-youtube-ts.vercel.app/</h3>

<br/>

## 🧩 아키텍처

<p align="center">
  <img src="https://github.com/ClownNero/Algorithm/assets/110890911/4bdcd1b3-2f58-41ba-aa8a-628ace187eec"
    width="90%"/>
</p>

<br/>

## 📁 구조

```
📦
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  └─ youtubelogo.png
│  └─ index.html
├─ src
│  ├─ App.tsx
│  ├─ api
│  │  ├─ fakeYoutubeClient.ts
│  │  ├─ youtube.ts
│  │  └─ youtubeClient.ts
│  ├─ components
│  │  ├─ ChannelInfo.tsx
│  │  ├─ RelatedVideos.tsx
│  │  ├─ SearchHeader.tsx
│  │  ├─ UI
│  │  │  └─ LoadingIndicator.tsx
│  │  └─ VideoCard.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ models
│  │  ├─ apiTypes.ts
│  │  └─ videoType.ts
│  ├─ pages
│  │  ├─ NotFound.tsx
│  │  ├─ VideoDetail.tsx
│  │  └─ Videos.tsx
│  ├─ store
│  │  └─ YoutubeApiStore.tsx
│  └─ util
│     ├─ date.ts
│     └─ view.ts
├─ tailwind.config.js
└─ tsconfig.json
```

</br>

## ✅ 목표

- 기존 JS를 TS로 리팩토링하여 정적 타이핑 기능으로 오류를 사전 관리
- TypeScript를 이번 프로젝트에서 활용함으로써 공부한 내용을 더욱 확실히 익힘
- React Query를 활용한 비동기 상태 관리 이해 및 YouTube API 활용
- TailwindCSS의 이해 및 적용
- ContextAPI 대신 Zustand 사용

<br/>

## 🖼 페이지

<table align="center" style="width: 100%">
  <tbody>
    <tr>
      <td><img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/9c76048f-5cf8-480c-9f83-f9abdf29c1df"  style="width: 100%; height: 100%; object-fit: cover;"></td>
      <td><img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/b3bfbbce-4095-41b5-9b75-3e93eb546c10"  style="width: 100%; height: 100%; object-fit: cover;"></td>
      <td><img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/c7691cde-cc25-44e9-acb0-d597a2fe8235"  style="width: 100%; height: 100%; object-fit: cover;"></td>
    </tr>
    <tr>
        <td><p align="center">(main_page)/(videos)</p></td>
        <td><p align="center">(detail_page)/videos/watch/[videoId]</p></td>
        <td><p align="center">(search_page)/videos/:keyword</p></td>
    </tr>
  </tbody>
</table>
<br/>

## 💥 기능

<div style="width: 100%; display: flex; flex-direction: row; justify-content: space-between;">
  <img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/9c76048f-5cf8-480c-9f83-f9abdf29c1df" style="width: 32%; height: auto; object-fit: cover;">
  <img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/b3bfbbce-4095-41b5-9b75-3e93eb546c10" style="width: 32%; height: auto; object-fit: cover;">
  <img src="https://github.com/ClownNero/React-Youtube-TS/assets/110890911/c7691cde-cc25-44e9-acb0-d597a2fe8235" style="width: 32%; height: auto; object-fit: cover;">
</div>

- 메인페이지

  - 현재 한국에서 가장 인기있는 영상들 조회
  - 각 영상 날짜와 조회수 확인
  - 영상 클릭 시 상세페이지 이동

- 상세페이지

  - 해당 영상 시청 가능
  - 채널 썸네일 추가와 영상 설명란 클릭하여 확장 축소
  - 채널 영상들 연관 영상으로 개시

- 검색페이지
  - 검색한 내용 바탕으로 영상들 조회

<br/>

## 💻 반응형

<table align="center" style="width: 100%">
  <tbody>
    <tr>
     <td align="center" colspan='2'><img  src="https://github.com/ClownNero/Algorithm/assets/110890911/5143d84b-5318-4097-8f52-754aec6d8990"  style="width: 100%; height: 100%; object-fit: cover;"></td>
    </tr>
    <tr>
      <td colspan='2'><p align="center">(Grid) 640px 이하 => 1024px 이하 => 1280px 이하 => 1536px 이하 => 1536px 이상</p></td>
    </tr>
    <tr>
      <td><img src="https://github.com/ClownNero/Algorithm/assets/110890911/c9db78fa-7a9d-4754-b0f4-c236580e69f4"  style="width: 100%; height: 80%; object-fit: cover;"></td>
      <td><img src="https://github.com/ClownNero/Algorithm/assets/110890911/12694a2e-567a-4575-9c55-7a2e13302b1d"  style="width: 100%; height: 80%; object-fit: cover;"></td>
    </tr>
    <tr>
        <td><p align="center">(Flex)1024px 이상</p></td>
        <td><p align="center">(Flex)1024px 이하</p></td>
    </tr>
  </tbody>
</table>

## 🥲 문제

- React에서 Iframe 사용시, 뒤로가기가 되지 않는 버그

  - 상세페이지에서 뒤로 가기를 클릭하면 한번에 돌아가지지 않고 여러번을 눌러야 이동하는 문제가 있었음.
  - 유튜브 동영상을 넣을 때 사용하는 Iframe에 unique한 key 값을 넣지 않아 react router에 혼란을 주게 되어 발생한 문제였기에, 단순히 Iframe을 출력하는 컴포넌트를 호출할 때, unique한 key 값을 주어 해결하였음.

- (Zustand) 편리함 VS 성능

  - Zustand를 사용함으로 Cpntext API는 종종 Context.Provider와 Context.Consumer를 사용해야하고, 별도의 로직을 작성해야합니다. 이런 보일러플레이트(Boilerplate) 코드를 크게 줄일 수 있어 큰 편리함을 느꼈음.
  - 이 프로젝트에서는 단순한 YoutubeAPI 클래스 상태 관리만 하므로, Zustand를 사용하더라도 성능의 이점은 없었음. 프로젝트가 규모가 커지고 복잡해질수록 Zustand의 장점이 확실히 돋보일거라 생각됨.
