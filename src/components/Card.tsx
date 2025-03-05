import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface CardProps {
	product: {
		id: number;
		name: string;
		price: number;
		image: string;
   };
   onWishlistToggle: (productId: number, isWishlisted: boolean) => void;
   isWishlisted: boolean; 
}

function Card({
	product,
	onWishlistToggle,
   isWishlisted,
}: CardProps) {
	
	

	return (
		<div className="flex flex-col">
			<div className="w-[300px] h-[390px] flex flex-col justify-center items-center rounded-md overflow-hidden shadow-sm relative">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-cover"
				/>
				<div className="absolute right-2 top-2">
					<button
						className=""
						onClick={() => onWishlistToggle(product.id, !isWishlisted)}
					>
						{isWishlisted ? (
							<HeartIconSolid className="size-6 text-red-500"></HeartIconSolid>
						) : (
							<HeartIconOutline className="size-6 text-gray-950"></HeartIconOutline>
						)}
					</button>
				</div>
			</div>
			<div className="w-full bottom-0 flex justify-between py-3">
				<span className="font-semibold text-gray-950 text-base">
					{product.name}
				</span>
				<span className="font-normal text-gray-950 text-base">
					{`$${product.price}`}
				</span>
			</div>
		</div>
	);
}

export default Card;
