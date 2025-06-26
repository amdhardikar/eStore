import '../../styles/header.scss'
import SearchIcon from '../../assets/search-icon.svg';
import ShoppingBagIcon from '../../assets/shopping-bag-icon.svg';
import UserIcon from '../../assets/user-icon.svg';

function Header() {
	return (
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
	);
}

export default Header