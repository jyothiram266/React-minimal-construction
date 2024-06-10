import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "Services", path: "/services", active: false },
		{ title: "Products", path: "/products", active: false },
		{ title: "Newsletter", path: "/newsletter", active: false },
		{ title: "About", path: "/about", active: false },
	];
	return (
		<div className="w-full flex items-center justify-between">
			<img
				src={logo}
				alt="logo"
				width="200" height="120"
			/>
			<div className="hidden md:flex items-center gap-8">
				{navLinks.map((link) => {
					return (
						<Link
							to={link.path}
							className={`${
								link.active
									? "text-[#ff9900] border-[#ff9900]"
									: "text-[#263640] border-transparent"
							} font-semibold text-[15px] no-underline border-b-2 py-1`}
							key={link.title}
						>
							{link.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
