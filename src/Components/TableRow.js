import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ item }) => {
	const { id, name, description, price, stock, supplier, imageUrl } = item;
	return (
		<tr>
			<td>
				<Link to={`/products/${id}`}>
					<img
						src={imageUrl}
						className=" max-w-[100px]"
						alt="Url not available"
					/>
				</Link>
			</td>
			<td>
				<Link to={`/products/${id}`} className="text-blue-700 underline">
					{name}
				</Link>
			</td>
			<td>{description}</td>
			<td>{price}</td>
			<td>{stock}</td>
			<td>{supplier}</td>
		</tr>
	);
};

export default TableRow;
