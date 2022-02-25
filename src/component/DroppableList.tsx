import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface Props {
  droppableId: string;
  draggables: JSX.Element[];
}

const DroppableList: React.FC<Props> = ({ droppableId, draggables }: Props) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {draggables.map((item, idx) => (
            <Draggable
              key={`item-${idx}`}
              draggableId={`item-${idx}`}
              index={idx}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item}
                </div>
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
