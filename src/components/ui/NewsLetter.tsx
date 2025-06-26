function NewsLetter() {
	return (
		<section className='newsletter'>
			<div className='newsletter-container'>
				<div className='newsletter-container--heading'>
					<h2>join our style circle</h2>
					<p>get 10% off on your first order and exclusive updates</p>
				</div>
				<div className='newsletter-container--body'>
					<input type='email' name='email' id='email' placeholder='Enter your email' autoComplete="email"/>
					<button>subscribe</button>
				</div>
			</div>
		</section>
	);
}

export default NewsLetter;
