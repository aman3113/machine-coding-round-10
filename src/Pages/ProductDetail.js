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
		<section className="flex justify-center items-center flex-col w-full">
			<h1 className="text-2xl md:text-4xl font-bold text-center p-2 py-[50px]">
				{product?.name}
			</h1>
			<div className="flex flex-col gap-2 ">
				<img className="w-[300px]" src={product?.imageUrl} alt="" />
				<p>Price: {product?.price}</p>
				<p>Stock: {product?.stock}</p>
				<p>Supplier: {product?.supplier}</p>
				<p>Department: {product?.department}</p>
				<p>SKU: {product?.sku}</p>
				<p>Delivered: {product?.delivered}</p>
				<p>Description: {product?.description}</p>
			</div>
		</section>
	);
};

export default ProductDetail;
