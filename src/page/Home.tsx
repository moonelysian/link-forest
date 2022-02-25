import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DeleteMark from '../component/DeleteMark';
import DroppableList from '../component/DroppableList';
import {
  Block,
  ContentArea,
  ContentTitle,
  ProfileArea,
  Video,
  Wrapper,
} from '../styles/base';

const Home = (): JSX.Element => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const draggables = [
      <ContentTitle key={0}>텍스트 텍스트 텍스트 텍스트 텍스트</ContentTitle>,
      <Block
        key={1}
        onClick={(e) => {
          activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
        }}
      >
        <div>일반링크</div>
        <DeleteMark />
      </Block>,
      <Block
        key={2}
        className="horizion"
        onClick={(e) => {
          activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
        }}
      >
        <img
          src="https://via.placeholder.com/80"
          alt=""
          style={{ borderRadius: '16px' }}
        />
        <p style={{ marginLeft: '10px' }}>이미지와 함께하는 블록</p>
      </Block>,
      <Block
        key={3}
        onClick={(e) => {
          activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
        }}
      >
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
    setItems(draggables);
  }, []);

  const activeBlock = (classList: DOMTokenList, link: string) => {
    classList.add('is-active');
    location.assign(link);
  };

  const onDrangEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const before = [...items];
    const [reordered] = before.splice(result.source.index, 1);
    before.splice(result.destination.index, 0, reordered);
    setItems([...before]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <DragDropContext onDragEnd={onDrangEnd}>
        <Wrapper>
          {/* 프로필 영역 */}
          <ProfileArea>
            <img width="110px" src="https://via.placeholder.com/110" alt="" />
            <div>title</div>
            <div>description</div>
          </ProfileArea>
          {/* 내용 영역 */}
          <ContentArea>
            <DroppableList droppableId="content-area" draggables={items} />
          </ContentArea>
        </Wrapper>
        <div
          className="hidden"
          style={{
            width: '40%',
            padding: '50px 70px',
            borderLeft: '1px solid #d5d5d5',
            boxShadow: '0px 0px 30px #d5d5d5',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div>프로필 이미지</div>
          <div>제목</div>
          <div>설명</div>
          <ContentTitle>제목</ContentTitle>
          <Block>일반 블록</Block>
          <Block className="horizion">
            <img
              src="https://via.placeholder.com/80"
              alt=""
              style={{ borderRadius: '16px' }}
            />
            <p style={{ marginLeft: '10px' }}>이미지와 함께하는 블록</p>
          </Block>
          <Block>
            <img
              src="https://via.placeholder.com/400"
              alt=""
              style={{ borderRadius: '16px', width: '100%' }}
            />
            <p style={{ marginTop: '20px' }}>이미지와 함께하는 블록</p>
          </Block>
          <Video
            src="https://via.placeholder.com/240"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Video>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;
