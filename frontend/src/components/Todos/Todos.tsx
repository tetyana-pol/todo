import { TaskList } from "../TaskList";
import "./todos.scss";
import { useGetListsQuery } from "../../store/features/listsSlice";
import { ListType } from "../../types/List";

export const Todos = () => {
  const { data: lists = [] } = useGetListsQuery();
  return (
    <main className="todos">
      {lists.map((list: ListType) => (
        <TaskList key={list.id} list={list} />
      ))}
    </main>
  );
};
