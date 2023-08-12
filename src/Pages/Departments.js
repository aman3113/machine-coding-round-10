import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";

const Departments = () => {
	const navigate = useNavigate();
	const { setFilters } = useContext(InventoryContext);

	function handleNavigation(e) {
		const department = e.target.innerText;
		navigate("/products");
		setFilters((prev) => ({
			...prev,
			department: department,
		}));
	}
	return (
		<section>
			<h1 className="text-2xl md:text-4xl font-bold text-center p-2 py-[50px]">
				Checkout Different Departments
			</h1>
			<div className="flex flex-wrap items-start  justify-center gap-4">
				<div
					onClick={handleNavigation}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px] text-2xl font-bold cursor-pointer"
				>
					Kitchen
				</div>
				<div
					onClick={handleNavigation}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px] text-2xl font-bold cursor-pointer"
				>
					Clothing
				</div>
				<div
					onClick={handleNavigation}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px] text-2xl font-bold cursor-pointer"
				>
					Toys
				</div>
			</div>
		</section>
	);
};

export default Departments;
