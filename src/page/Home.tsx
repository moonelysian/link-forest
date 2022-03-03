import { useEffect, useState } from 'react';
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from 'react-beautiful-dnd';
import { draggables } from '../component/base';
import DeleteMark from '../component/DeleteMark';
import DroppableList from '../component/DroppableList';
import Editor from '../component/Editor';
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
    // const draggables = [
    //   <ContentTitle key={0}>텍스트 텍스트 텍스트 텍스트 텍스트</ContentTitle>,
    //   <Block
    //     key={1}
    //     onClick={(e) => {
    //       activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
    //     }}
    //   >
    //     <div>일반링크</div>
    //     <DeleteMark background="rgba(230, 230, 250, 0.8)" />
    //   </Block>,
    //   <Block
    //     key={2}
    //     className="horizion"
    //     onClick={(e) => {
    //       activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
    //     }}
    //   >
    //     <img
    //       src="https://via.placeholder.com/80"
    //       alt=""
    //       style={{ borderRadius: '16px' }}
    //     />
    //     <p style={{ marginLeft: '10px' }}>이미지와 함께하는 블록</p>
    //   </Block>,
    //   <Block
    //     key={3}
    //     onClick={(e) => {
    //       activeBlock(e.currentTarget.classList, 'https://www.naver.com/');
    //     }}
    //   >
    //     <img
    //       src="https://via.placeholder.com/400"
    //       alt=""
    //       style={{ borderRadius: '16px', width: '100%' }}
    //     />
    //     <p style={{ marginTop: '20px' }}>이미지와 함께하는 블록</p>
    //   </Block>,
    //   <Video
    //     key={4}
    //     src="https://www.youtube.com/embed/g7c0W-8rNmw"
    //     frameBorder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   ></Video>,
    // ];
    // setItems(draggables);
  }, []);

  const activeBlock = (classList: DOMTokenList, link: string) => {
    classList.add('is-active');
    location.assign(link);
  };

  const copyBlock = (
    source: JSX.Element[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    const sourceClone = [...source];
    const destClone = [...items];
    const cloned = sourceClone[droppableSource.index];
    if (destClone.length === 0) {
      return setItems([cloned]);
    }
    destClone.splice(droppableDestination.index, 0, cloned);
    return setItems(destClone);
  };

  const onDrangEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      source.droppableId === 'editor-area' &&
      destination.droppableId === 'content-area'
    ) {
      return copyBlock(draggables, source, destination);
    }
    const before = [...items];
    const [reordered] = before.splice(source.index, 1);
    before.splice(destination.index, 0, reordered);
    return setItems([...before]);
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
            <DroppableList
              droppableId="content-area"
              draggables={items}
              itemId={'content'}
            />
          </ContentArea>
        </Wrapper>
        <Editor isOpen={true} />
      </DragDropContext>
    </div>
  );
};

export default Home;
