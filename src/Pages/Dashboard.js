import React, { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";

const Dashboard = () => {
	const { state } = useContext(InventoryContext);
	const totalStock = state.inventoryArr.reduce(
		(acc, curr) => (acc += curr.stock),
		0
	);
	const totalDeliveredStocks = state.inventoryArr?.reduce(
		(acc, curr) => (acc += curr.delivered),
		0
	);

	const lowItemStocks = state.inventoryArr?.filter(
		(item) => item.stock <= 10
	).length;
	return (
		<section>
			<h1 className="text-2xl md:text-4xl font-bold text-center p-2 py-[50px]">
				Your Inventory Manager
			</h1>
			<div className="flex flex-wrap items-start  justify-center gap-4">
				<div className="p-4 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]">
					<p className="text-3xl text-green-500 font-bold">{totalStock}</p>
					<p className="font-semibold">Total Stock</p>
				</div>
				<div className="p-4 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]">
					<p className="text-3xl text-orange-500 font-bold">
						{totalDeliveredStocks}
					</p>
					<p className="font-semibold">Total Delivered</p>
				</div>
				<div className="p-4 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]">
					<p className="text-3xl text-red-500 font-bold">{lowItemStocks}</p>
					<p className="font-semibold">Low Stock Items</p>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
