import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";

const ProductDetail = () => {
	const { productId } = useParams();
	const { state } = useContext(InventoryContext);

	const product = state.inventoryArr.find(
		(item) => item.id === Number(productId)
	);

	return (
		<section className="flex justify-center items-center flex-col w-full py-[30px] ">
			<h1 className="text-2xl md:text-4xl font-bold text-center p-4 ">
				{product?.name}
			</h1>
			<div className="flex flex-col gap-2 shadow-md p-3 shadow-black rounded-md md:w-[50%] ">
				<img
					className="min-w-[300px] max-h-[250px] w-full"
					src={product?.imageUrl}
					alt=""
				/>
				<p>
					<span className="text-lg font-semibold pr-2">Price:</span>{" "}
					{product?.price}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">Stock:</span>{" "}
					{product?.stock}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">Supplier:</span>{" "}
					{product?.supplier}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">Department:</span>{" "}
					{product?.department}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">SKU:</span>{" "}
					{product?.sku}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">Delivered:</span>{" "}
					{product?.delivered}
				</p>
				<p>
					<span className="text-lg font-semibold pr-2">Description:</span>{" "}
					{product?.description}
				</p>
			</div>
		</section>
	);
};

export default ProductDetail;
