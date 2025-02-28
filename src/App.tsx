import { useState, useEffect } from "react";
import "./App.scss";
import products from "./db/products.json";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

function App() {
	const [data, setData] = useState(products);
	const [wishlistState, setWishlistState] = useState<{
		[key: number]: boolean;
	}>({});

	// Filter states
	const [expandedSections, setExpandedSections] = useState<
		Record<SectionName, boolean>
	>({
		brand: true,
		price: true,
	});
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);

	// Extract unique brands
	const uniqueBrands = [...new Set(products.map((product) => product.brand))];

	// Create price ranges
	const priceRanges = [
		{ min: 0, max: 50, label: "Under $50" },
		{ min: 50, max: 100, label: "$50 - $100" },
		{ min: 100, max: 200, label: "$100 - $200" },
		{ min: 200, max: Infinity, label: "Over $200" },
	];

	// Type for the expandable sections
	type SectionName = "brand" | "price";

	// ToggleSection function
	const toggleSection = (section: SectionName) => {
		setExpandedSections({
			...expandedSections,
			[section]: !expandedSections[section],
		});
	};
	// Handle brand checkbox change
	const handleBrandChange = (brand: string) => {
		setSelectedBrands((prevSelected) => {
			if (prevSelected.includes(brand)) {
				return prevSelected.filter((b) => b !== brand);
			} else {
				return [...prevSelected, brand];
			}
		});
	};

	// Handle price range checkbox change
	const handlePriceChange = (rangeIndex: number) => {
		setSelectedPriceRanges((prevSelected) => {
			if (prevSelected.includes(rangeIndex)) {
				return prevSelected.filter((i) => i !== rangeIndex);
			} else {
				return [...prevSelected, rangeIndex];
			}
		});
	};

	// Wishlist handler
	const wishlistHandler = (productId: number) => {
		setWishlistState((prevIndex) => ({
			...prevIndex,
			[productId]: !prevIndex[productId],
		}));
	};

	// Apply filters when filter selections change
	useEffect(() => {
		let filteredProducts = [...products];

		// Apply brand filter
		if (selectedBrands.length > 0) {
			filteredProducts = filteredProducts.filter((product) =>
				selectedBrands.includes(product.brand)
			);
		}

		// Apply price filter
		if (selectedPriceRanges.length > 0) {
			filteredProducts = filteredProducts.filter((product) => {
				return selectedPriceRanges.some((rangeIndex) => {
					const range = priceRanges[rangeIndex];
					return product.price >= range.min && product.price < range.max;
				});
			});
		}

		setData(filteredProducts);
	}, [selectedBrands, selectedPriceRanges]);

	// Log wishlist changes
	useEffect(() => {
		console.log(
			"Wishlisted Product IDs:",
			Object.keys(wishlistState).filter(
				(productId) => wishlistState[Number(productId)]
			)
		);
	}, [wishlistState]);

	return (
		<>
			<div className="container mx-auto pt-9">
				<div className="py-2">
					<nav className="text-sm">
						<ol className="flex items-center space-x-2">
							<li>
								<a
									href="#"
									className="text-gray-500 hover:text-gray-700"
								>
									Home
								</a>
							</li>
							<li className="flex items-center">
								<span className="mx-2 text-gray-400">/</span>
								<a
									href="#"
									className="text-gray-500 hover:text-gray-700"
								>
									Catalog
								</a>
							</li>
							<li className="flex items-center">
								<span className="mx-2 text-gray-400">/</span>
								<span className="text-gray-900 font-medium">
									Trend Setters
								</span>
							</li>
						</ol>
					</nav>
				</div>
				<div className="flex flex-col md:flex-row gap-6">
					{/* Filters sidebar */}
					<div className="w-full md:w-1/4 lg:w-1/5">
						<div className="bg-white p-4">
							<h3 className="font-bold text-lg mb-4">Filters</h3>
							<div className="space-y-4">
								{/* Brand filter */}
								<div className="border-t border-gray-200 py-6">
									<h3 className="-my-3 flow-root">
										<button
											type="button"
											className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
											onClick={() => toggleSection("brand")}
										>
											<span className="font-medium text-gray-900">
												Brand
											</span>
											<span className="ml-6 flex items-center">
												{!expandedSections.brand ? (
													<svg
														className="size-5"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
													</svg>
												) : (
													<svg
														className="size-5"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
															clipRule="evenodd"
														/>
													</svg>
												)}
											</span>
										</button>
									</h3>
									{expandedSections.brand && (
										<div className="pt-6">
											<div className="space-y-4">
												{uniqueBrands.map((brand, index) => (
													<div key={index} className="flex gap-3">
														<div className="flex h-5 shrink-0 items-center">
															<div className="group grid size-4 grid-cols-1">
																<input
																	id={`filter-brand-${index}`}
																	name="brand[]"
																	value={brand}
																	type="checkbox"
																	checked={selectedBrands.includes(
																		brand
																	)}
																	onChange={() =>
																		handleBrandChange(brand)
																	}
																	className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
																/>
																<svg
																	className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
																	viewBox="0 0 14 14"
																	fill="none"
																>
																	<path
																		className={`${
																			selectedBrands.includes(
																				brand
																			)
																				? "opacity-100"
																				: "opacity-0"
																		} group-has-checked:opacity-100`}
																		d="M3 8L6 11L11 3.5"
																		strokeWidth="2"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</div>
														</div>
														<label
															htmlFor={`filter-brand-${index}`}
															className="min-w-0 flex-1 text-gray-500"
														>
															{brand}
														</label>
													</div>
												))}
											</div>
										</div>
									)}
								</div>

								{/* Price filter */}
								<div className="border-t border-gray-200 py-6">
									<h3 className="-my-3 flow-root">
										<button
											type="button"
											className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
											onClick={() => toggleSection("price")}
										>
											<span className="font-medium text-gray-900">
												Price
											</span>
											<span className="ml-6 flex items-center">
												{!expandedSections.price ? (
													<svg
														className="size-5"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
													</svg>
												) : (
													<svg
														className="size-5"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
															clipRule="evenodd"
														/>
													</svg>
												)}
											</span>
										</button>
									</h3>
									{expandedSections.price && (
										<div className="pt-6">
											<div className="space-y-4">
												{priceRanges.map((range, index) => (
													<div key={index} className="flex gap-3">
														<div className="flex h-5 shrink-0 items-center">
															<div className="group grid size-4 grid-cols-1">
																<input
																	id={`filter-price-${index}`}
																	name="price[]"
																	value={index}
																	type="checkbox"
																	checked={selectedPriceRanges.includes(
																		index
																	)}
																	onChange={() =>
																		handlePriceChange(index)
																	}
																	className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
																/>
																<svg
																	className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
																	viewBox="0 0 14 14"
																	fill="none"
																>
																	<path
																		className={`${
																			selectedPriceRanges.includes(
																				index
																			)
																				? "opacity-100"
																				: "opacity-0"
																		} group-has-checked:opacity-100`}
																		d="M3 8L6 11L11 3.5"
																		strokeWidth="2"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</div>
														</div>
														<label
															htmlFor={`filter-price-${index}`}
															className="min-w-0 flex-1 text-gray-500"
														>
															{range.label}
														</label>
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Product grid */}
					<div className="w-full md:w-3/4 lg:w-4/5">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
							{data.map((product) => {
								const isWishlist = wishlistState[product.id] || false;
								return (
									<div className="flex flex-col" key={product.id}>
										<div className="w-[300px] h-[390px] flex flex-col justify-center items-center rounded-md overflow-hidden shadow-sm relative">
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-full object-cover"
											/>
											<div className="absolute right-2 top-2">
												<button
													className=""
													onClick={() =>
														wishlistHandler(product.id)
													}
												>
													{isWishlist ? (
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
												${product.price}
											</span>
										</div>
									</div>
								);
							})}
						</div>
						{data.length === 0 && (
							<div className="w-full text-center py-12">
								<p className="text-gray-500 text-lg">
									No products match your selected filters.
								</p>
								<button
									onClick={() => {
										setSelectedBrands([]);
										setSelectedPriceRanges([]);
									}}
									className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Clear Filters
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
