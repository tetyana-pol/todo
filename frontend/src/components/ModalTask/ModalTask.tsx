import "./modal-task.scss";
import { useAppSelector } from "../../store/app/hooks";
import { modalSelector } from "../../store/features/modalSlice";
import { useDeleteTaskMutation } from "../../store/features/tasksSlice";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPenToSquare, faTrash);

export const ModalTask = () => {
  const { currentTask } = useAppSelector(modalSelector);
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <div className="modal-task">
      <button
        type="button"
        onClick={() => {
          if (currentTask) deleteTask(currentTask.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
        <span>Delete</span>
      </button>
    </div>
  );
};
