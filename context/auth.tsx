import { createContext, useContext, useState } from "react";
import { UserType } from "../types";

interface InitialStateType {
  user: UserType | null;
}

const inititalState: InitialStateType = {
  user: null,
};

const Context = createContext(inititalState);
