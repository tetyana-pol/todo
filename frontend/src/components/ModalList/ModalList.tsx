import "./modal-list.scss";
import { useAppDispatch } from "../../store/app/hooks";
import { editFormList, newFormTask } from "../../store/features/modalSlice";
import {
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPenToSquare, faPlus, faTrash);

export const ModalList = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="modal-list">
      <button
        type="button"
        onClick={() => {
          dispatch(editFormList());
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <span>Edit</span>
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(newFormTask());
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add new card</span>
      </button>
    </div>
  );
};
