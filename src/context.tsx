import { createContext } from 'react';

export const GlobalContext = createContext<{
  tab?:string;
  setTab?: (tab:string) => void
}>({});
