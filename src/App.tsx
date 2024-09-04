import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

export type CoursesType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterTechnologies = "all" | "active" | "completed";

function App() {
  // const technologies: Array<CoursesType> = [
  //   { id: 1, title: "HTML&CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: false },
  // ];
  const [technologies, setTechnologies] = useState<CoursesType[]>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterTechnologies>("all");

  const deleteTechnologies = (id: string) => {
    const removedTask = technologies.filter((item) => item.id !== id);
    setTechnologies(removedTask);
  };

  const addTechnologies = (titleInput: string) => {
    const newTechnologies = { id: v1(), title: titleInput, isDone: false };
    setTechnologies([...technologies, newTechnologies]);
  };

  const filterTechnologies = (value: FilterTechnologies) => {
    setFilter(value);
  };

  let filteredTechnologies = technologies;

  if (filter === "active") {
    filteredTechnologies = technologies.filter((el) => !el.isDone);
  }
  if (filter === "completed") {
    filteredTechnologies = technologies.filter((el) => el.isDone);
  }

  const changeStatusTechnologies = (id: string, newStatus: boolean) => {
    const newStatusTechnologies = technologies.map((el) =>
      el.id === id ? { ...el, isDone: newStatus } : el
    );
    setTechnologies(newStatusTechnologies);
  };

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        technologies={filteredTechnologies}
        deleteTechnologies={deleteTechnologies}
        addTechnologies={addTechnologies}
        filterTechnologies={filterTechnologies}
        filter={filter}
        changeStatusTechnologies={changeStatusTechnologies}
      />
    </div>
  );
}

export default App;
