import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRotateLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { useAppDispatch } from "../../store/app/hooks";
import { newFormList } from "../../store/features/modalSlice";

library.add(faRotateLeft, faPlus);

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <h2 className="header_name">My task board</h2>
      <div className="header_menu">
        <div>
          <button
            type="button"
            className="header_menu_button-list"
            onClick={() => {
              dispatch(newFormList());
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Create new list</span>
          </button>
        </div>
      </div>
    </header>
  );
};
