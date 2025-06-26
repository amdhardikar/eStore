import '../../styles/trending.scss'
import ProductShirt from '../../assets/product-shirt.jpg'

function Trending() {
   return (
		<section className='trending'>
			<div className='trending-container'>
				<div className='trending-container--heading'>
					<h2>trending</h2>
					{/* <p>view all</p> */}
				</div>
				<div className='trending-container--body'>
					<div className='trending-container--body--card'>
						<div className='trending-container--body--card--image'>
							<img src={ProductShirt} alt='black shirt' />
						</div>
						<div className='trending-container--body--card--info'>
							<p>classic formal black shirt</p>
							<p>599 Rs</p>
						</div>
					</div>
					<div className='trending-container--body--card'>
						<div className='trending-container--body--card--image'>
							<img src={ProductShirt} alt='black shirt' />
						</div>
						<div className='trending-container--body--card--info'>
							<p>classic formal black shirt</p>
							<p>599 Rs</p>
						</div>
					</div>
					<div className='trending-container--body--card'>
						<div className='trending-container--body--card--image'>
							<img src={ProductShirt} alt='black shirt' />
						</div>
						<div className='trending-container--body--card--info'>
							<p>classic formal black shirt</p>
							<p>599 Rs</p>
						</div>
					</div>
					<div className='trending-container--body--card'>
						<div className='trending-container--body--card--image'>
							<img src={ProductShirt} alt='black shirt' />
						</div>
						<div className='trending-container--body--card--info'>
							<p>classic formal black shirt</p>
							<p>599 Rs</p>
						</div>
					</div>
					<div className='trending-container--body--card'>
						<div className='trending-container--body--card--image'>
							<img src={ProductShirt} alt='black shirt' />
						</div>
						<div className='trending-container--body--card--info'>
							<p>classic formal black shirt</p>
							<p>599 Rs</p>
						</div>
					</div>
				</div>
				<div className='trending-container--footer'>
					<p>explore all</p>
				</div>
			</div>
		</section>
	);
}

export default Trending;