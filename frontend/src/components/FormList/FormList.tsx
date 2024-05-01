import "./form-list.scss";
import { useState } from "react";
import { useAddListMutation } from "../../store/features/listsSlice";
import { useAppDispatch } from "../../store/app/hooks";
import { close } from "../../store/features/modalSlice";

export const FormList = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();
  const [addList] = useAddListMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addList(title).catch(() => window.alert("Error"));
    setTitle("");
  };

  return (
    <div className="form_list">
      <div className="form_list-content">
        <div className="form_list-close">
          <button
            type="button"
            onClick={() => {
              dispatch(close());
            }}
          >
            X
          </button>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            name="name"
            placeholder="Type the name of list"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="form_list-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
