const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "super Man", type: "DC" },
    "task-2": { id: "task-2", content: "spider man", nam: "Marvel" },
    "task-3": { id: "task-3", content: "iron man", type: "Marvel" },
    "task-4": { id: "task-4", content: "ant man", type: "Marvel" },
    "task-5": { id: "task-5", content: "Aqua Man", type: "DC" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Super HeroMovies",
      type: "All",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Marvel Movies",
      type: "Marvel",

      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "DC Movies",
      type: "DC",
      taskIds: [],
    },
  },

  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
