import { useEffect, useState } from 'react';
import {
  DragDropContext,
  DraggableLocation,
  DragStart,
  DropResult,
} from 'react-beautiful-dnd';
import { draggables } from '../component/base';
import DeleteMark from '../component/DeleteMark';
import DroppableList from '../component/DroppableList';
import Editor from '../component/Editor';

const Home = (): JSX.Element => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const onDragStart = (state: DragStart) => {
    if (state.source.droppableId === 'editor-area') {
      const $contentArea = document.querySelector('.content-area');
      $contentArea ? $contentArea.classList.add('hovering') : '';
    }
  };

  const onDrangEnd = (result: DropResult) => {
    const { source, destination } = result;
    const $contentArea = document.querySelector('.content-area');
    $contentArea ? $contentArea.classList.remove('hovering') : '';
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
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDrangEnd}>
        <div className="wrapper">
          {/* 프로필 영역 */}
          <div className="profile-area">
            <img width="110px" src="https://via.placeholder.com/110" alt="" />
            <div>title</div>
            <div>description</div>
          </div>
          {/* 내용 영역 */}
          <div className="content-area">
            <DroppableList
              droppableId="content-area"
              draggables={items}
              itemId={'content'}
            />
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <img
            src="images/next.png"
            width="45px"
            height="45px"
            style={{ transform: 'rotate(0.5turn)' }}
            onClick={(e) => {
              setIsOpen(!isOpen);
              e.currentTarget.style.transform = isOpen
                ? 'rotate(0.5turn)'
                : 'rotate(1turn)';
            }}
          />
        </div>
        <Editor isOpen={isOpen} />
      </DragDropContext>
    </div>
  );
};

export default Home;
