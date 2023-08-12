import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<main className=" md:w-[20%] py-[80px] flex justify-center  bg-gray-900 md:h-full">
			<div className="flex flex-col  gap-5 ">
				<NavLink
					className={({ isActive }) =>
						` ${isActive ? "text-red-400 font-bold" : "text-white"}`
					}
					to="/"
				>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${isActive ? "text-red-400 font-bold" : "text-white"}`
					}
					to="/departments"
				>
					Departments
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						` ${isActive ? "text-red-400 font-bold" : "text-white"}`
					}
					to="/products"
				>
					Products
				</NavLink>
			</div>
		</main>
	);
};

export default SideBar;
