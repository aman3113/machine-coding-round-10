import { ChakraProvider } from "@chakra-ui/react";
import InventoryContextProvider from "./Context/InventoryContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Departments from "./Pages/Departments";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail";
import ErrorPage from "./Pages/ErrorPage";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<InventoryContextProvider>
			<ChakraProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index="true" element={<Dashboard />} />
							<Route path="/departments" element={<Departments />} />
							<Route path="/products" element={<ProductList />} />
							<Route path="/products/:productId" element={<ProductDetail />} />
						</Route>

						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</InventoryContextProvider>
	);
}

export default App;
