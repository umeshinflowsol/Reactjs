// import React from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import { useState } from "react";
// import { DndProvider } from "react-dnd";

// const myData = [
//   { id: "m1", Name: "antman" },
//   { id: "m2", Name: "antman" },
//   { id: "m3", Name: "antman" },
//   { id: "m4", Name: "antman" },
//   { id: "m5", Name: "antman" },
// ];

// const columnData = [
//   {
//     one: {
//       name: "HollyWoodMovies",
//       items: [myData],
//     },
//     two: {
//       name: "MarvelMovies",
//       items: [],
//     },
//     three: {
//       name: "MarvelMovies",
//       items: [],
//     },
//   },
// ];

// const Pratice = () => {
//   const [column, setColumns] = useState([columnData]);
//   return (
//     <div>
//       <DragDropContext>
//         {column.map((data, key) => {
//           return (
//             <div>
//               <Droppable>
//                 <h1>{column.name}</h1>
//                 {(provided, snapshots) => {
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                   ></div>;
//                 }}
//               </Droppable>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// };

// export default Pratice;
