import React, { ChangeEvent, useState } from "react";
import { CoursesType, FilterTechnologies } from "./App";

type PropsType = {
  title: string;
  technologies: CoursesType[];
  deleteTechnologies: (id: string) => void;
  addTechnologies: (titleInput: string) => void;
  filterTechnologies: (nameButton: FilterTechnologies) => void;
  filter: string;
  changeStatusTechnologies: (id: string, newStatus: boolean) => void;
};

export const Todolist = ({
  title,
  technologies,
  deleteTechnologies,
  addTechnologies,
  filterTechnologies,
  filter,
  changeStatusTechnologies,
}: PropsType) => {
  const [titleInput, setTitleInput] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.currentTarget.value);
  };

  const addTechnologiesHandler = () => {
    addTechnologies(titleInput);
    setTitleInput("");
  };

  const changeStatusTechnologiesHandler = (
    id: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    changeStatusTechnologies(id, e.currentTarget.checked);
  };

  const deleteTechnologiesHandler = (id: string) => {
    deleteTechnologies(id);
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
            <input
              onChange={(e) => changeStatusTechnologiesHandler(task.id, e)}
              type="checkbox"
              checked={task.isDone}
            />
            <span className={task.isDone ? "active-task" : ""}>
              {task.title}
            </span>
            <button onClick={() => deleteTechnologiesHandler(task.id)}>
              x
            </button>
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
