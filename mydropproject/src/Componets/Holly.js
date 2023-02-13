// import React from "react";
// import { DragDropContext } from "@hello-pangea/dnd";
// import { useState } from "react";
// import ListComponent from "../ListComponent";
// const Holly = () => {
//   const [list1, setList1] = useState([]);
//   const [list2, setList2] = useState([
//     "BatMan",
//     "SuperMan",
//     "Wonder Woman",
//     "Flash",
//     "Green Lantern",
//     "AquaMan",
//     "Robin",
//     "Cyborg",
//     "StarFire",
//     "HawkGirl",
//     "Shazam",
//   ]);
//   const [list3, setList3] = useState([
//     "BatMan",
//     "SuperMan",
//     "Wonder Woman",
//     "Flash",
//     "Green Lantern",
//     "AquaMan",
//     "Robin",
//     "Cyborg",
//     "StarFire",
//     "HawkGirl",
//     "Shazam",
//   ]);

//   const deleteItem = (list, index) => {
//     return list.splice(index, 1);
//   };
//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;
//     if (source.droppableId === destination.droppableId) {
//       if (source.droppableId === "Marvel_drop_area") {
//         let tempList = list1;
//         const removed = deleteItem(tempList, source.index);
//         tempList.splice(destination.index, 0, removed);
//         setList1(tempList);
//       }
//     } else {
//       let tempList1 = list1;
//       let tempList2 = list2;
//       if (source.droppableId === "Marvel_drop_area") {
//         const removed = deleteItem(tempList1, source.index);
//         tempList2.splice(destination.index, 0, removed);
//         setList1(tempList1);
//         setList2(tempList2);
//       } else {
//         const removed = deleteItem(tempList2, source.index);
//         tempList1.splice(destination.index, 0, removed);
//         setList1(tempList1);
//         setList2(tempList2);
//       }
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="App">
//         <header className="App-header">
//           <h4>Hands on React-Beautiful-DND</h4>
//           <ListComponent Marvel={list1} DC={list2} All={list3} />
//         </header>
//       </div>
//     </DragDropContext>
//   );
// };
// export default Holly;
