import React, { useContext, useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useToast,
} from "@chakra-ui/react";
import { InventoryContext } from "../Context/InventoryContext";

const FilterHeader = () => {
	const { state, dispatch, filters, setFilters } = useContext(InventoryContext);
	const toast = useToast();
	const [openAddModel, setOpenAddModel] = useState(false);
	const [formData, setFormData] = useState({
		id: state.inventoryArr.length + 1,
		department: "",
		name: "",
		description: "",
		price: 0,
		stock: 0,
		sku: "",
		supplier: "",
		delivered: 0,
		imageUrl: "",
	});

	function handleFormChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	function handleFormSubmit(e) {
		e.preventDefault();
		dispatch({ type: "ADD PRODUCT", payload: formData });
		setFormData({
			id: state.inventoryArr.length + 1,
			department: "",
			name: "",
			description: "",
			price: 0,
			stock: 0,
			sku: "",
			supplier: "",
			delivered: 0,
			imageUrl: "",
		});
		setOpenAddModel(false);
		toast({
			title: "Product Added.",
			description: "We've created updated your inventory.",
			status: "success",
			duration: 1500,
			isClosable: true,
		});
	}
	return (
		<div className="flex flex-wrap gap-4 justify-center md:justify-between items-center  p-3">
			<p className="w-screen text-center sm:w-auto text-3xl font-bold">
				Products
			</p>
			<select
				className="border rounded-md cursor-pointer p-1"
				onChange={(e) =>
					setFilters((prev) => ({
						...prev,
						department: e.target.value,
					}))
				}
				defaultValue={filters.department ?? "All Department"}
			>
				<option className="cursor-pointer bg-gray-800 text-white" value="All">
					All Departments
				</option>
				<option
					className="cursor-pointer bg-gray-800 text-white"
					value="Kitchen"
				>
					Kitchen
				</option>
				<option
					className="cursor-pointer bg-gray-800 text-white"
					value="Clothing"
				>
					Clothing
				</option>
				<option className="cursor-pointer bg-gray-800 text-white" value="Toys">
					Toys
				</option>
			</select>
			<div className="flex gap-1 items-center">
				<input
					type="checkbox"
					className="cursor-pointer w-fit p-0"
					id="lowStock"
					checked={filters.lowStockItem}
					onChange={() =>
						setFilters((prev) => ({
							...prev,
							lowStockItem: !prev.lowStockItem,
						}))
					}
				/>
				<label htmlFor="lowStock" className="cursor-pointer">
					Low Stock Item
				</label>
			</div>
			<select
				className="border rounded-md cursor-pointer p-1"
				onChange={(e) =>
					setFilters((prev) => ({
						...prev,
						sortBy: e.target.value,
					}))
				}
			>
				<option className="cursor-pointer bg-gray-800 text-white" value="name">
					Name
				</option>
				<option className="cursor-pointer bg-gray-800 text-white" value="price">
					Price
				</option>
				<option className="cursor-pointer bg-gray-800 text-white" value="stock">
					Stock
				</option>
			</select>
			<button
				onClick={() => setOpenAddModel(true)}
				className="bg-blue-600 rounded-md text-white p-1 px-4 "
			>
				New
			</button>
			<Modal
				size="xl"
				isOpen={openAddModel}
				onClose={() => setOpenAddModel(false)}
				scrollBehavior="inside"
			>
				<ModalOverlay />
				<ModalContent margin="5">
					<ModalHeader>Add New Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form
							onSubmit={handleFormSubmit}
							className=" flex flex-col gap-3 mb-4"
						>
							<label>
								<p>Department:</p>
								<select
									className="border border-black px-2 py-1 w-full rounded-lg cursor-pointer"
									defaultValue=""
									required
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											department: e.target.value,
										}))
									}
								>
									<option disabled value="">
										Select Department
									</option>
									<option value="Toys">Toys</option>
									<option value="Kitchen">Kitchen</option>
									<option value="Clothing">Clothing</option>
								</select>
							</label>
							<label>
								<p>Name:</p>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>Description:</p>
								<textarea
									className="border border-black px-2 py-1 w-full rounded-lg"
									name="description"
									cols="30"
									rows="3"
									value={formData.description}
									onChange={handleFormChange}
									required
								></textarea>
							</label>
							<label>
								<p>Price:</p>
								<input
									type="number"
									name="price"
									min="0"
									value={formData.price}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>Stock:</p>
								<input
									type="number"
									name="stock"
									min="0"
									value={formData.stock}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>SKU:</p>
								<input
									type="text"
									name="sku"
									value={formData.sku}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>Supplier:</p>
								<input
									type="text"
									name="supplier"
									value={formData.supplier}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>Delivered:</p>
								<input
									type="number"
									min="0"
									name="delivered"
									value={formData.delivered}
									onChange={handleFormChange}
									required
								/>
							</label>
							<label>
								<p>Image URL:</p>
								<input
									type="url"
									name="imageUrl"
									value={formData.imageUrl}
									onChange={handleFormChange}
									required
								/>
							</label>
							<input
								type="submit"
								value="Add Product"
								className="bg-blue-600 text-white px-2 py-1 rounded-lg mt-3 cursor-pointer"
							/>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default FilterHeader;
