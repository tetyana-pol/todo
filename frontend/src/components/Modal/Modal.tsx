import { useAppSelector } from "../../store/app/hooks";
import { modalSelector } from "../../store/features/modalSlice";
import { FormList } from "../FormList";
import { FormListEdit } from "../FormListEdit";
import { FormTask } from "../FormTask";

export const Modal = () => {
  const { type, isShown, currentList } = useAppSelector(modalSelector);

  if (!isShown) return null;

  if (type === "newFormList") return <FormList />;

  if (type === "editFormList" && currentList)
    return <FormListEdit value={currentList} />;

  if (type === "newFormTask") return <FormTask />;

  return null;
};
