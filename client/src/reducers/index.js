import { combineReducers } from "redux";
import { messages, messagesPending } from "./home";

export const app = combineReducers({
  messagesPending,
  messages
});
