import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom';

const Album = () => {
	const id = Number.parseInt(Math.random() * 100);
	return (
		<>
			<div className='col'>
				<div className='card shadow-sm'>
					<div
						className='bd-placeholder-img card-img-top text-white align-items-center d-flex'
						style={{
							height: 200,
							background: 'no-repeat 50%',
							backgroundSize: 'cover',
							backgroundImage: `url('https://picsum.photos/id/${id}/200/300')`,
						}}
					>
						<div className=' text-center   w-100'>Title</div>
					</div>

					<div className='card-body'>
						<p className='card-text'>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
						<div className='d-flex justify-content-between align-items-center'>
							<div className='btn-group'>
								<a
									className='btn btn-sm btn-outline-secondary'
									href='/Event%20name'
								>
									View
								</a>
							</div>
							<small className='text-muted'>9 mins</small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const Comments = ({ topicId }) => {
	useEffect(() => {
		// https://alumni-events.netlify.app/
		window.disqus_config = function () {
			this.page.url = `https://alumni-events.netlify.app/${topicId} `;
			this.page.identifier = topicId;
		};
		(function () {
			// DON'T EDIT BELOW THIS LINE
			var d = document,
				s = d.createElement('script');
			s.src = 'https://alumni-events-1.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	});
	return (
		<>
			<div id='disqus_thread' className="my-3"></div>
		</>
	);
};
function Topic() {
	let { topicId } = useParams();
	return (
		<div className='container'>
			<div>
				<div className='my-3'>
					<h1>{topicId}</h1>
					<div className='rounded-lg bg-white p-3 shadow-sm d-flex justify-content-between'>
						<span>
							<span className=' '>Fri, Apr 3, 2020</span>
							<br />
							<span className=' '>
								<span>05:00 pm EDT</span>
								<span>&nbsp; to 06:00 pm EDT</span>
							</span>
						</span>
						<button
							disabled=''
							type='button'
							className=' btn btn-secondary'
						>
							<span>Registrations closed</span>
						</button>
					</div>
				</div>

				<div className='row  '>
					<div className='col col-8'>
						<div className='rounded-lg bg-white p-3 shadow-sm'>
							<img
								alt='Empty'
								className='mw-100'
								src='https://media.almabaseapp.com/558/uploads/c72aa6eed76a4e3e8f3301742dbb1486.jpg'
							/>
						</div>
					</div>
					<div className='col col-4'>
						<div className='rounded-lg bg-white p-3 shadow-sm'>
							<h3>Agenda</h3>
							0204-0334: Enter <br />
							0204-0334: Party <br />
							0204-0334: Close <br />
						</div>
					</div>
				</div>
			</div>
			<Comments topicId={topicId} />
			<div className='my-3 ' />
		</div>
	);
}
function App() {
	return (
		<Router>
			<header>
				<div className='navbar navbar-dark bg-dark shadow-sm'>
					<div className='container'>
						<a
							className='navbar-brand d-flex align-items-center'
							href='/'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								aria-hidden='true'
								className='me-2'
								viewBox='0 0 24 24'
							>
								<path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'></path>
								<circle cx='12' cy='13' r='4'></circle>
							</svg>
							<strong>Album</strong>
						</a>
						<button
							className='navbar-toggler collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarHeader'
							aria-controls='navbarHeader'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
					</div>
				</div>
			</header>

			<main>
				<section className='py-5 text-center container'>
					<div className='row py-lg-5 bg-dark'>
						<div className='col   '>
							<img
								alt=''
								className='mw-100'
								src='https://media.almabaseapp.com/558/eventsx/event-x-images/6486/ab75f077068d465eb72e48d702f055a8.jpg'
							/>
						</div>
					</div>
				</section>

				<Switch>
					<Route path={`/:topicId`}>
						<Topic />
						<div className='container'>
							<div className='text-center my-3 '>
								<a
									href='/'
									className='btn d-block btn-secondary'
								>
									See all
								</a>
							</div>
						</div>
					</Route>

					<Route path='/'>
						<div className='album py-5 bg-light'>
							<div className='container'>
								<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
									{[...new Array(9)].map((_, i) => {
										return <Album key={i} />;
									})}
								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
