import React, { createContext, useEffect, useReducer, useState } from "react";
import { inventoryData } from "../Utils/Data";

export const InventoryContext = createContext();

const initialState = {
	inventoryArr:
		JSON.parse(localStorage.getItem("InventoryData")) ?? inventoryData,
};

function Reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case "ADD PRODUCT":
			return {
				inventoryArr: [...state.inventoryArr, payload],
			};
		default:
			return state;
	}
}

const InventoryContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const [filters, setFilters] = useState({
		department: "All",
		sortBy: "name",
		lowStockItem: false,
	});

	useEffect(() => {
		console.log(state);
		localStorage.setItem("InventoryData", JSON.stringify(state.inventoryArr));
	}, [state]);
	return (
		<InventoryContext.Provider value={{ state, dispatch, filters, setFilters }}>
			{children}
		</InventoryContext.Provider>
	);
};

export default InventoryContextProvider;
