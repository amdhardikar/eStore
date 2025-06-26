import '../styles/home.scss';

import LeartherShoe from '../assets/learther-shoe.jpg';
import Header from '../components/ui/Header.tsx';
import Footer from '../components/ui/Footer.tsx';
import Hero from '../components/ui/Hero.tsx';
import Assurance from '../components/ui/Assurance.tsx';

function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Assurance />

			<section className='trending'>
				<div className='trending-container'>
					<div className='trending-title'>
						<h2>trending now</h2>
					</div>
					<div className='trending-body'>
						<div className='trending-card card-1'>
							<img src={LeartherShoe} alt='' />
						</div>
						<div className='trending-card card-2'>
							<img src={LeartherShoe} alt='' />
						</div>
						<div className='trending-card card-3'>
							<img src={LeartherShoe} alt='' />
						</div>
						<div className='trending-card card-4'>
							<img src={LeartherShoe} alt='' />
						</div>
						<div className='trending-card card-5'>
							<img src={LeartherShoe} alt='' />
						</div>
						<div className='trending-card card-6'>
							<img src={LeartherShoe} alt='' />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Home;
