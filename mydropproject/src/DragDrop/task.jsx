import React from "react";
import styled from "styled-components";
import { Draggable } from "@hello-pangea/dnd";

const Container = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;
const Clone = styled(Container)`
  div {
    display: none !important;
  }
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === "task-1";

    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <React.Fragment>
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}
              style={provided.draggableProps.style}
              isDragDisabled={isDragDisabled}
            >
              {this.props.task.content}
            </Container>
            {snapshot.isDragging && <Clone>{this.props.content}</Clone>}
          </React.Fragment>
        )}
      </Draggable>
    );
  }
}
