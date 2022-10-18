import { state, type State } from "poxi";

type Schema = { subReddit: string };
export const getState = () => state<Schema>();
export const getSubbredit = () => getState().get("subReddit")

export function onCreate(state: State<Schema>) {
  state.set({ subReddit: "aww" })};