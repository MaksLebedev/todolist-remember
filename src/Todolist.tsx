import React, { ChangeEvent, useState } from "react";
import { CoursesType, FilterTechnologies } from "./App";

type PropsType = {
  title: string;
  technologies: CoursesType[];
  deleteTechnologies: (id: string) => void;
  addTechnologies: (titleInput: string) => void;
  filterTechnologies: (nameButton: FilterTechnologies) => void;
  filter: string;
};

export const Todolist = ({
  title,
  technologies,
  deleteTechnologies,
  addTechnologies,
  filterTechnologies,
  filter,
}: PropsType) => {
  const [titleInput, setTitleInput] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.currentTarget.value);
  };

  const addTechnologiesHandler = () => {
    addTechnologies(titleInput);
    setTitleInput("");
  };

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input value={titleInput} onChange={onChangeInputHandler} />
        <button onClick={addTechnologiesHandler}>+</button>
      </div>
      <ul>
        {technologies.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => deleteTechnologies(task.id)}>x</button>
          </li>
        ))}
      </ul>
      <div>
        <button
          className={filter === "all" ? "active-btn" : ""}
          onClick={() => filterTechnologies("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active-btn" : ""}
          onClick={() => filterTechnologies("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active-btn" : ""}
          onClick={() => filterTechnologies("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
