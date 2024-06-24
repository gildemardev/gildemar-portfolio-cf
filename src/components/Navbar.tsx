import { Link } from "@tanstack/react-router";
import { FC } from "react";

const Navbar: FC = () => {
	return (
		<nav className='px-6 py-2 flex items-center justify-between bg-transparent sticky w-full'>
			<img
				src='/logo-svg.svg'
				alt='Logotipo Gildemar'
				loading='lazy'
				className='object-contain h-10'
			/>
			<div className='gap-2'>
				{/* TODO: Componetizar o link */}
				<Link to='/' className='[&.active]:font-bold text-white'>
					Home
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
