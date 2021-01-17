import { ReactNode } from "react";

export interface State {
  error: Error | null;
}

export interface Props {
  children: ReactNode;
}
