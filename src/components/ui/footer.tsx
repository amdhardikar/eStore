import '../../styles/component/footer.scss';
import FbLogo from '../../assets/fb-logo.svg'
import XLogo from '../../assets/x-logo.svg';
import InstagramLogo from '../../assets/instagram-logo.svg';

function Footer() {
	return (
		<>
			<div className='footer-section'>
				<div className='footer-section-logo'>
					<div className='footer-section-logo-text'>
						<span>fabrik</span>
					</div>
					<div className='footer-section-logo-social'>
						<a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
							<img src={FbLogo} alt='Facebook logo' />
						</a>
						<a href='https://x.com' target='_blank' rel='noopener noreferrer' aria-label='X / Twitter'>
							<img src={XLogo} alt='Twitter logo' />
						</a>
						<a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
							<img src={InstagramLogo} alt='Instagram logo' />
						</a>
					</div>
				</div>
				<div className='footer-section-links'>
					<ul className='footer-section-links-container'>
						<li className='footer-section-links--block'>
							<span className='footer-section-links--heading'>Quick Links</span>
							<ul>
								<li>
									<a href='/home'>
										<span className='footer-section-links--text'>Home</span>
									</a>
								</li>
								<li>
									<a href='/about'>
										<span className='footer-section-links--text'>About</span>
									</a>
								</li>
								<li>
									<a href='/services'>
										<span className='footer-section-links--text'>Services</span>
									</a>
								</li>
								<li>
									<a href='/single-item'>
										<span className='footer-section-links--text'>Single Item</span>
									</a>
								</li>
								<li>
									<a href='/contact-us'>
										<span className='footer-section-links--text'>Contact</span>
									</a>
								</li>
							</ul>
						</li>
						<li className='footer-section-links--block'>
							<span className='footer-section-links--heading'>About</span>
							<ul>
								<li>
									<a href='/how-it-works'>
										<span className='footer-section-links--text'>How it works</span>
									</a>
								</li>
								<li>
									<a href='/about'>
										<span className='footer-section-links--text'>About</span>
									</a>
								</li>
								<li>
									<a href='/packages'>
										<span className='footer-section-links--text'>Our Packages</span>
									</a>
								</li>
								<li>
									<a href='/promotion'>
										<span className='footer-section-links--text'>Promotion</span>
									</a>
								</li>
								<li>
									<a href='/refer'>
										<span className='footer-section-links--text'>Refer a friend</span>
									</a>
								</li>
							</ul>
						</li>
						<li className='footer-section-links--block'>
							<span className='footer-section-links--heading'>Help & Info</span>
							<ul>
								<li>
									<a href='/track-order'>
										<span className='footer-section-links--text'>Track your order</span>
									</a>
								</li>
								<li>
									<a href='/returns'>
										<span className='footer-section-links--text'>Returns + Exchanges</span>
									</a>
								</li>
								<li>
									<a href='/shipping'>
										<span className='footer-section-links--text'>Shipping + Delivery</span>
									</a>
								</li>
								<li>
									<a href='/contact-us'>
										<span className='footer-section-links--text'>Contact us</span>
									</a>
								</li>
								<li>
									<a href='/faq'>
										<span className='footer-section-links--text'>Frequent Questions</span>
									</a>
								</li>
							</ul>
						</li>
						<li className='footer-section-links--block'>
							<span className='footer-section-links--heading'>Contact Us</span>
							<ul>
								<li>
									<span className='footer-section-links--text'>
										Do you have any questions or suggestions
										<span className='footer-section-contact-redirect'>
											<a href='/email-id-redirect'>contact-us@gmail.com</a>
										</span>
									</span>
								</li>
								<li>
									<span className='footer-section-links--text'>
										Do you need support? Give us a call
										<span className='footer-section-contact-redirect'>+91-982198679</span>
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='footer-bottom-line'></div>
				<div className='footer-bottom-text'>© Copyright {new Date().getFullYear()} All rights reserved. Made by Aamod & Harshit</div>
			</div>
		</>
	);
}

export default Footer;
