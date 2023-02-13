import React from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";

function ListComponent({ Marvel, DC, All }) {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "darkgrey",
    width: "21%",
    margin: "auto",
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "darkgrey" : "white",
    color: isDragging ? "white" : "black",
    padding: isDragging ? "0%" : "2%",
    paddingLeft: "2%",
    margin: "0%",
    fontSize: "17px",
    borderBottom: "0.5px solid gray",
    // styles we need to apply on draggables
    ...draggableStyle,
  });
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Droppable droppableId="Dc_drop_id">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <h6>Marvel SuperHeroes</h6>
              {DC.map((data, index) => (
                <Draggable draggableId={data} key={data} index={index}>
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="marvel_drop_id">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <h6>Marvel SuperHeroes</h6>
              {Marvel.map((data, index) => (
                <Draggable
                  draggableId={`${data}${index}`}
                  key={data}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="all_drop_id">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <h6>Marvel SuperHeroes</h6>
              {All.map((data, index) => (
                <Draggable
                  draggableId={`${data}${index}`}
                  key={data}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ListComponent;
