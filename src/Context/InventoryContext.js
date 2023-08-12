import React, { createContext, useEffect, useReducer } from "react";
import { inventoryData } from "../Utils/Data";

export const InventoryContext = createContext();

const initialState = {
	inventoryArr:
		JSON.parse(localStorage.getItem("InventoryData")) ?? inventoryData,
};

function Reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
}

const InventoryContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	useEffect(() => {
		localStorage.setItem(
			"InventoryData",
			JSON.stringify(initialState.inventoryArr)
		);
	}, [state]);
	return (
		<InventoryContext.Provider value={{ state, dispatch }}>
			{children}
		</InventoryContext.Provider>
	);
};

export default InventoryContextProvider;
