import { SET_NAME, VIEW_NAME } from "../types/playTypes";
import { PlayAction } from "../actions/playAction";

export interface AppState {
	name: string;
	age: number;
}

const initialState: AppState = {
	name: "erons",
	age: 18,
};

const playReducer = (state = initialState, action: PlayAction): AppState => {
	// const { type, payload } = action;
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				name: action.payload,
			};
		case VIEW_NAME:
			return {
				...state,
				name: "erons is back!",
			};
		default:
			return state;
	}
};

export default playReducer;
