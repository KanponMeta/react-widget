import { createContext } from "react";

export const GlobalContext = createContext<{
  route: string;
  routes: any[];
  navigate: (path: string) => void;
}>({
  route: "",
  routes: [],
  navigate: () => {},
});
