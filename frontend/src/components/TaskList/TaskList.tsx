import "./list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../Task/Task";
import { ListType } from "../../types/List";
import { useAppDispatch } from "../../store/app/hooks";

import { useGetTasksQuery } from "../../store/features/tasksSlice";
import { newFormTask, setCurrentList } from "../../store/features/modalSlice";
import { TaskType } from "../../types/Task";
import { ModalList } from "../ModalList";
import { useState } from "react";

library.add(faEllipsisVertical);

export const TaskList = ({ list }: { list: ListType }) => {
  const [isModalList, setIsModalList] = useState(false);
  const dispatch = useAppDispatch();

  const { data: tasks = [] } = useGetTasksQuery();

  const renderTasks = tasks.filter((task: TaskType) => task.listId === list.id);

  return (
    <div className="list">
      <div className="list_header">
        <h4>{list.title}</h4>
        <div className="list_header-right">
          <span>{renderTasks.length}</span>
          <button
            className="list_header-button"
            type="button"
            onClick={() => {
              dispatch(setCurrentList(list));
              setIsModalList((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {isModalList && <ModalList />}
        </div>
      </div>
      <button
        className="list_button"
        onClick={() => {
          dispatch(setCurrentList(list));
          dispatch(newFormTask());
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add new card</span>
      </button>
      {renderTasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
