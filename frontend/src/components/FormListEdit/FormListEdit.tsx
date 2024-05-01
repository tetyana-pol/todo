import "./form-list.scss";
import { useState } from "react";
import { useUpdateListMutation } from "../../store/features/listsSlice";
import { useAppDispatch } from "../../store/app/hooks";
import { close } from "../../store/features/modalSlice";
import { ListType } from "../../types/List";

type Props = {
  value: ListType;
};

export const FormListEdit: React.FC<Props> = ({ value }) => {
  const [editValue, setEditValue] = useState<ListType>(value);

  const [updateList] = useUpdateListMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateList(editValue);
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
            value={editValue.title}
            onChange={(e) =>
              setEditValue({ ...editValue, title: e.target.value })
            }
          />
          <button type="submit" className="form_list-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
