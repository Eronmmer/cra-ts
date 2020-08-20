import { combineReducers } from "redux";
import playReducer, { AppState as PlayReducerState } from "./playReducer";

const rootReducer = combineReducers({
	play: playReducer,
});

export default rootReducer;

export type ReduxState = {
	play: PlayReducerState;
};
