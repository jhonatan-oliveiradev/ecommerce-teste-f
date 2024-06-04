import Link from "next/link";
import { FanIcon, ShoppingCartIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
	return (
		<header className="bg-background border-b w-full px-1">
			<nav className="flex items-center justify-between w-full max-w-7xl h-16 mx-auto px-5">
				<Link className="flex items-center gap-2" href="/">
					<FanIcon size={28} className="text-primary" />
					<span className="font-black text-black dark:text-white">
						Zion Store
					</span>
				</Link>

				<div className="hidden lg:flex items-center gap-4">
					<Link
						className="font-medium text-primary hover:text-primary/80 transition-all"
						href="/"
					>
						Home
					</Link>
					<Link
						className="font-medium text-primary hover:text-primary/80 transition-all"
						href="/products"
					>
						Produtos
					</Link>
					<Link
						className="font-medium text-primary hover:text-primary/80 transition-all"
						href="/about"
					>
						Sobre
					</Link>
				</div>

				<div className="flex items-center justify-center gap-4">
					<Link className="relative" href="/cart">
						<ShoppingCartIcon size={24} className="text-primary" />
					</Link>
					<ModeToggle />
				</div>
			</nav>
		</header>
	);
};

export default Header;
