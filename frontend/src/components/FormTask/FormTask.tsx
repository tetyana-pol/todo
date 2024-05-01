import "./form-task.scss";
import { useState } from "react";
import { TaskType } from "../../types/Task";
import { useAddTaskMutation } from "../../store/features/tasksSlice";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { close, modalSelector } from "../../store/features/modalSlice";

export const FormTask = () => {
  const [formData, setFormData] = useState<Omit<TaskType, "id">>({
    name: "",
    description: "",
    duedate: new Date(),
    priority: "",
    listId: 0,
  });

  const [addTask] = useAddTaskMutation();
  const dispatch = useAppDispatch();
  const { currentList } = useAppSelector(modalSelector);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    addTask({ ...formData, listId: currentList?.id ?? 0 }).catch(() =>
      window.alert("")
    );
    setFormData({
      name: "",
      description: "",
      duedate: new Date(),
      priority: "",
      listId: 0,
    });
  };

  return (
    <div className="form_task">
      <div className="form_task-content">
        <div className="form_task-close">
          <button
            type="button"
            onClick={() => {
              dispatch(close());
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Type name"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Type description"
              required
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="date"
              name="duedate"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div>
            <select
              name="priority"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, priority: e.target.value }))
              }
            >
              <option value="">Choose priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
