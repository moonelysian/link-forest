import { Block, ContentTitle, Video } from '../styles/base';

export const draggables = [
  <ContentTitle key={0}>텍스트 텍스트 텍스트 텍스트 텍스트</ContentTitle>,
  <Block key={1}>
    <div>일반링크</div>
  </Block>,
  <Block key={2} className="horizion">
    <img
      src="https://via.placeholder.com/80"
      alt=""
      style={{ borderRadius: '16px' }}
    />
    <p style={{ marginLeft: '10px' }}>이미지와 함께하는 블록</p>
  </Block>,
  <Block key={3}>
    <img
      src="https://via.placeholder.com/400"
      alt=""
      style={{ borderRadius: '16px', width: '100%' }}
    />
    <p style={{ marginTop: '20px' }}>이미지와 함께하는 블록</p>
  </Block>,
  <Video
    key={4}
    src="https://www.youtube.com/embed/g7c0W-8rNmw"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></Video>,
];
