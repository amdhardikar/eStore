import GiftIcon from '../../assets/gift-icon.svg';
import ReturnIcon from '../../assets/return-icon.svg';
import SupportIcon from '../../assets/support-icon.svg';
import TruckIcon from '../../assets/truck-icon.svg';

function Assurance() {
	return (
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
	);
}

export default Assurance;
