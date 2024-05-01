import { TaskType } from "../../types/Task";
import "./task.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisVertical,
  faCalendar,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { useAppDispatch } from "../../store/app/hooks";
import { setCurrentTask } from "../../store/features/modalSlice";
import { ModalTask } from "../ModalTask";
import { useState } from "react";

library.add(faEllipsisVertical, faCalendar, faChevronDown);

export const Task = ({ task }: { task: TaskType }) => {
  const [isTaskShown, setIsTaskShown] = useState(false);

  const dispatch = useAppDispatch();

  const { name, description, duedate, priority } = task;

  return (
    <div className="task">
      <div className="task_header">
        <button type="button" onClick={() => {}}>
          <h5>{name}</h5>
        </button>
        <div className="task_header-modal">
          <button
            type="button"
            onClick={() => {
              dispatch(setCurrentTask(task));
              setIsTaskShown((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {isTaskShown && <ModalTask />}
        </div>
      </div>

      <div className="task_description">{description}</div>

      <div className="task_calendar">
        <FontAwesomeIcon icon={faCalendar} />
        <span>{dayjs(duedate).format("ddd, DD MMM")}</span>
      </div>

      <div className="task_priority">
        <span>• {priority}</span>
      </div>

      <div className="task_move"></div>
    </div>
  );
};
