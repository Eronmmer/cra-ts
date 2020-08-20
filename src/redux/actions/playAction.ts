import { Dispatch } from "react";
import { SET_NAME, VIEW_NAME } from "../types/playTypes";

export type PlayAction =
	| { type: typeof SET_NAME; payload: string }
	| { type: typeof VIEW_NAME };

export const setName = (name: string) => (dispatch: Dispatch<PlayAction>) => {
	dispatch({
		type: SET_NAME,
		payload: name,
	});
};

export const showName = () => (dispatch: Dispatch<PlayAction>) => {
	dispatch({
		type: VIEW_NAME,
	});
};
