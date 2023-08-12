import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex h-screen">
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Layout;
