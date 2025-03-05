import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import ProductListing from "./pages/ProductListing";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ProductListing />} />
				{/*<Route path="/catalog" element={<Catalog />} />*/}
			</Routes>
		</Router>
	);
}

export default App;
