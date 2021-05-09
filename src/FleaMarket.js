const FleaMarket = () => {
	return (
		<div className='album py-5 bg-light'>
			<div className='container'>
				<p>
					<a className='btn btn-link' role='button' href='/'>
						Back
					</a>
				</p>
				<h2 className='bg-dark text-white text-center p-3 my-3'>
					FH SWF Flea market 2021
				</h2>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{[...new Array(3)].map((_, i) => {
						return <Album key={i} />;
					})}
				</div>

				<div
					class='jumbotron bg-secondary text-light p-3 py-5 text-center mx-auto my-5'
					role='button'
					style={{ width: '70%' }}
				>
					<div class='display-4'>Upload your items here</div>
					<p class='lead'>
						(including photos, price, location, contact detail)
					</p>
				</div>
			</div>
		</div>
	);
};

export default FleaMarket;

const Album = () => {
	const id = Number.parseInt(Math.random() * 100);
	return (
		<>
			<div className='col'>
				<div className='card shadow-sm'>
					<div
						className='bd-placeholder-img card-img-top text-white align-items-center d-flex m-0'
						style={{
							height: 200,
							background: 'no-repeat 50%',
							backgroundSize: 'cover',
							backgroundImage: `url('https://picsum.photos/id/${id}/200/300')`,
						}}
					></div>

					<div className='card-body'>
						<p className='card-text text-center m-0'>
							Laptop <br />
							300 EUR <br />
							Soest <br />
							abc@gmail.com
							<br />
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
