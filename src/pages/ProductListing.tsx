import { useState, useEffect } from "react";
import Card from "../components/Card";
import products from "../db/products.json";

interface WishlistData {
	[key: number]: boolean;
}
function ProductListing() {
	const [data, setData] = useState(products);
	const [wishlistState, setWishlistState] = useState<WishlistData>({});
	// Handle wishlist changes from child components
	const handleWishlistToggle = (productId: number, isWishlisted: boolean) => {
		setWishlistState((prevIndex) => ({
			...prevIndex,
			[productId]: isWishlisted,
		}));
	};

	// Log wishlist changes
	useEffect(() => {
		console.log("Wishlisted Product IDs:", wishlistState);
	}, [wishlistState]);

	return (
		<div className="w-full md:w-3/4 lg:w-4/5">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
				{data.map((product) => (
					<Card
						key={product.id}
						product={product}
						isWishlisted={wishlistState[product.id] || false}
						onWishlistToggle={handleWishlistToggle}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductListing;
