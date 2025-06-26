import '../../styles/hero.scss'
import LeftArrowIcon from '../../assets/left-arrow-icon.svg';
import RightArrowIcon from '../../assets/right-arrow-icon.svg';
import FirstHeroImage from '../../assets/hero-image-first.jpg';

function Hero() {
	return (
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
	);
}

export default Hero;
