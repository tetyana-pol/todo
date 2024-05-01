import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ListType } from "../../types/List";
import { TaskType } from "../../types/Task";

export type ModalState = {
  type:
    | ""
    | "modalTask"
    | "newFormList"
    | "editFormList"
    | "newFormTask"
    | "editFormTask";
  isShown: boolean;
  currentList: ListType | null;
  currentTask: TaskType | null;
};

const initialState: ModalState = {
  type: "",
  isShown: false,
  currentList: null,
  currentTask: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrentList: (state, action: PayloadAction<ListType>) => {
      state.currentList = action.payload;
    },
    setCurrentTask: (state, action: PayloadAction<TaskType>) => {
      state.currentTask = action.payload;
    },
    newFormList: (state) => {
      state.type = "newFormList";
      state.isShown = true;
    },
    editFormList: (state) => {
      state.type = "editFormList";
      state.isShown = true;
    },
    newFormTask: (state) => {
      state.type = "newFormTask";
      state.isShown = true;
    },
    close: (state) => {
      state.type = "";
      state.isShown = false;
    },
  },
});

export const {
  newFormList,
  editFormList,
  newFormTask,
  close,
  setCurrentList,
  setCurrentTask,
} = modalSlice.actions;
export const modalSelector = (state: RootState) => state.modal;
export default modalSlice.reducer;
