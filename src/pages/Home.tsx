import { FC } from "react";
import Navbar from "../components/Navbar";
import { FaRegHandPeace, FaArrowRight } from "react-icons/fa";

interface homeProps {}

const home: FC<homeProps> = () => {
	return (
		<>
			<main className='flex flex-col items-center h-screen max-h-screen bg-black text-white'>
				<Navbar />
				{/* TODO: Implementar mensagem de acordo com o horário acessado. */}
				<div className='space-y-4 pt-10 px-2 sm:px-4'>
					<span className='inline-flex flex-nowrap px-5 py-2 border-2 border-zinc-800 rounded-full text-zinc-300 text-sm font-semibold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-800'>
						<FaRegHandPeace className='size-5 mr-2 text-zinc-300' />
						Olá, tudo bom?
					</span>
					<h1 className='scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-6xl md:w-2/3'>
						Profissional multidisciplinar. Sou Designer, Programador & Inovador
					</h1>
					<a
						href='https://api.whatsapp.com/send?phone=5598991641170'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center flex-nowrap bg-white px-5 py-3 rounded-full text-black text-sm font-semibold transition-colors duration-200 hover:bg-zinc-300'>
						Entre em contato
						<FaArrowRight className='size-4 ml-2' />
					</a>
				</div>
			</main>
		</>
	);
};

export default home;
