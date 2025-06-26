import '../styles/home.scss';

import Header from '../components/ui/Header.tsx';
import Hero from '../components/ui/Hero.tsx';
import Assurance from '../components/ui/Assurance.tsx';
import Footer from '../components/ui/footer.tsx';
import Trending from '../components/ui/Trending.tsx';
import NewsLetter from '../components/ui/NewsLetter.tsx';

function Home() {
	const logos = ['/brands/Albany-black.svg', '/brands/cambridge-black.svg', '/brands/Hamilton-black.svg', '/brands/file.svg', '/brands/KOBE-black.svg', '/brands/Montreal-black.svg'];

	return (
		<>
			<Header />
			<Hero />
			<Assurance />
			<Trending />
			<div className='brand'>
				<div className='brand-track'>
					{[...logos, ...logos, ...logos].map((src, index) => (
						<div className='logo-track' key={index}>
							<img className={`logo-${index}`} src={src} alt={`Logo ${index}`} />
						</div>
					))}
				</div>
				<div className='brand-track reverse'>
					{[...logos, ...logos, ...logos].map((src, index) => (
						<div className='logo-track' key={index}>
							<img className={`logo-${index}`} src={src} alt={`Logo ${index}`} />
						</div>
					))}
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</>
	);
}

export default Home;
