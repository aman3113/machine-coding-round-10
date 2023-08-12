import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<main className="w-[25%] py-[50px] px-2 flex flex-col items-center gap-5 bg-gray-900 h-full">
			<NavLink
				className={({ isActive }) =>
					`${isActive && "text-red-400 font-bold"} text-white`
				}
				to="/"
			>
				Dashboard
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					`${isActive && "text-red-400 font-bold"} text-white`
				}
				to="/departments"
			>
				Departments
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					`${isActive && "text-red-400 font-bold"} text-white`
				}
				to="/products"
			>
				Products
			</NavLink>
		</main>
	);
};

export default SideBar;
