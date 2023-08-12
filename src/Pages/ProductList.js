import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterHeader from "../Components/FilterHeader";
import { InventoryContext } from "../Context/InventoryContext";
import TableRow from "../Components/TableRow";

const ProductList = () => {
	const [searchParam, setSearchParams] = useSearchParams();
	const selectedDepartment = searchParam.get("department");

	const [filters, setFilters] = useState({
		department: selectedDepartment ?? "All",
		sortBy: "name",
		lowStockItem: false,
	});

	const { state } = useContext(InventoryContext);
	const { inventoryArr } = state;
	const departmentFiltered = inventoryArr.filter((item) =>
		filters.department === "All" ? true : item.department === filters.department
	);
	const sortByFiltered =
		filters.sortBy === "name"
			? [...departmentFiltered].sort((a, b) => a.name.localeCompare(b.name))
			: [...departmentFiltered].sort(
					(a, b) => a[filters.sortBy] - b[filters.sortBy]
			  );
	const filteredArr = filters.lowStockItem
		? sortByFiltered.filter((item) => item.stock <= 10)
		: sortByFiltered;

	return (
		<section>
			<FilterHeader filters={filters} setFilters={setFilters} />
			<div className="p-3 w-full overflow-x-auto">
				<table>
					<thead className="bg-gray-300 border border-black">
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
							<th>Stock</th>
							<th>Supplier</th>
						</tr>
					</thead>
					<tbody>
						{filteredArr?.map((item) => (
							<TableRow item={item} key={item.id} />
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ProductList;
