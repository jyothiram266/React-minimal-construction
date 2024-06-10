import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Products from "./pages/Products";


const App = () => {
	return (
		<div className="w-full h-full flex flex-col relative box-border">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />}/>
				<Route path="/newsletter" element={<Newsletter />}/>
				<Route path="/services" element={<Services />}/>
				<Route path="/products" element={<Products/>}/>
			</Routes>
		</div>
	);
};

export default App;
