import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
	return (
		<section>
			<h1 className="text-2xl md:text-4xl font-bold text-center p-2 py-[50px]">
				Checkout Different Departments
			</h1>
			<div className="flex flex-wrap items-start  justify-center gap-4">
				<Link
					to={`/products?department=Kitchen`}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]"
				>
					<p className="text-2xl font-bold">Kitchen</p>
				</Link>
				<Link
					to={`/products?department=Clothing`}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]"
				>
					<p className="text-2xl font-bold">Clothing</p>
				</Link>
				<Link
					to={`/products?department=Toys`}
					className="p-5 rounded-lg bg-gray-200 shadow-md text-center min-w-[150px]"
				>
					<p className="text-2xl font-bold">Toys</p>
				</Link>
			</div>
		</section>
	);
};

export default Departments;
