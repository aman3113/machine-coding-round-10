import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="md:flex h-screen">
			<SideBar />
			<div className="w-full md:h-screen overflow-y-auto md:w-[80%] p-2">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
