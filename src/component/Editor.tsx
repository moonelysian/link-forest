import styled from 'styled-components';
import { draggables } from './base';
import DroppableList from './DroppableList';

interface Props {
  isOpen: boolean;
}

const EditorArea = styled.div`
  background: rgba(232, 232, 232, 0.1);
  width: 40%;
  border-left: 1px solid #d5d5d5;
  box-shadow: 0px 0px 30px #d5d5d5;
`;

const Editor: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    <EditorArea className={isOpen ? 'editor' : 'editor hidden'}>
      <div className="wrapper">
        <DroppableList
          droppableId="editor-area"
          draggables={draggables}
          itemId="editor-block"
          isDropDisabled={true}
        />
      </div>
    </EditorArea>
  );
};

export default Editor;
