import '../styles/home.scss';
import SearchIcon from '../assets/search-icon.svg';
import ShoppingBagIcon from '../assets/shopping-bag-icon.svg';
import UserIcon from '../assets/user-icon.svg';
import LeftArrowIcon from '../assets/left-arrow-icon.svg';
import RightArrowIcon from '../assets/right-arrow-icon.svg';
import GiftIcon from '../assets/gift-icon.svg';
import ReturnIcon from '../assets/return-icon.svg';
import SupportIcon from '../assets/support-icon.svg';
import TruckIcon from '../assets/truck-icon.svg';
import FirstHeroImage from '../assets/hero-image-first.jpg';
import LeartherShoe from '../assets/learther-shoe.jpg';

function Home() {
	return (
		<>
			<header className='header'>
				<div className='header-container'>
					<nav className='header-nav-left'>
						<ul className='header-nav-links'>
							<li>core</li>
							<li>tailored</li>
							<li>shoes</li>
							<li>extras</li>
							<li>basics</li>
						</ul>
					</nav>
					<nav className='header-nav-center'>
						<span>fabrik</span>
						{/* <img src={BrandLogo} alt='Fashion People' /> */}
					</nav>
					<nav className='header-nav-right'>
						<ul className='header-nav-links'>
							<li>about</li>
							<li>contact</li>
							<li>
								<img className='icon' src={SearchIcon} alt='Search the product' />
							</li>
							<li>
								<img className='icon' src={UserIcon} alt='Account settings' />
							</li>
							<li>
								<img className='icon' src={ShoppingBagIcon} alt='View the wishlist' />
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<section className='hero'>
				<div className='hero-container'>
					<div className='hero-container-body'>
						<div className='hero-body-main'>
							<h1>
								Elevate your every day<span>modern men's style for every occasion</span>
							</h1>
							<button className='hero-button'>shop the collection</button>
						</div>
						<div className='hero-body-navigation'>
							<h2 className='hero-body-page'>01</h2>
							<div className='hero-body-btngroup'>
								<button>
									<img src={LeftArrowIcon} alt='Fashion People' />
								</button>
								<button>
									<img src={RightArrowIcon} alt='Fashion People' />
								</button>
							</div>
						</div>
					</div>
					<div className='hero-container-background'>
						{/* <img src='https://placehold.co/1920x1080/fff/f8f8f8/png' alt='Hero image' /> */}
						<img src={FirstHeroImage} alt='Hero image' />
					</div>
				</div>
			</section>

			<section className='assurance'>
				<div className='assurance-container'>
					<div className='assurance-body'>
						<div className='assurance-card'>
							<img className='assurance-icon' src={TruckIcon} alt='' />
							<p className='assurance-title'>free shipping</p>
							<p className='assurance-info'>on all orders above 50$</p>
						</div>
						<div className='assurance-card'>
							<img className='assurance-icon' src={ReturnIcon} alt='' />
							<p className='assurance-title'>money back</p>
							<p className='assurance-info'>easy 14 day return</p>
						</div>
						<div className='assurance-card'>
							<img className='assurance-icon' src={GiftIcon} alt='' />
							<p className='assurance-title'>gift voucher</p>
							<p className='assurance-info'>perfect for any occasion</p>
						</div>
						<div className='assurance-card'>
							<img className='assurance-icon' src={SupportIcon} alt='' />
							<p className='assurance-title'>online support</p>
							<p className='assurance-info'>24/7 live chat available</p>
						</div>
					</div>
				</div>
			</section>

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
		</>
	);
}

export default Home;
