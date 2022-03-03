import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface Props {
  droppableId: string;
  draggables: JSX.Element[];
  itemId: string;
  isDropDisabled?: boolean;
}

const DroppableList: React.FC<Props> = ({
  droppableId,
  draggables,
  itemId,
  isDropDisabled = false,
}: Props) => {
  return (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {draggables.map((item, idx) => (
            <Draggable
              key={`${itemId}-${idx}`}
              draggableId={`${itemId}-${idx}`}
              index={idx}
            >
              {(provided, snapshot) => (
                <>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item}
                  </div>
                  {snapshot.isDragging && isDropDisabled && <div>{item}</div>}
                </>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableList;
