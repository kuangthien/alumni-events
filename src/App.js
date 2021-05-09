import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FleaMarket from './FleaMarket';

const Comments = () => {
	useEffect(() => {
		// https://alumni-events.netlify.app/
		window.disqus_config = function () {
			this.page.url = `https://alumni-events.netlify.app/ `;
			this.page.identifier = '/';
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
			<div id='disqus_thread' className='my-3'></div>
		</>
	);
};
function Topic() {
	return (
		<div className='container'>
			<div>
				<div className='my-3'>
					<div className='rounded bg-white p-3 shadow-sm d-flex justify-content-between'>
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
						<div className='rounded bg-white p-3 shadow-sm'>
							<img
								alt='Empty'
								className='mw-100'
								src='/My_Invitation.jpeg'
							/>
						</div>
					</div>
					<div className='col col-4'>
						<div className='rounded bg-white p-3 shadow-sm mb-3'>
							<h3 className='my-3'>What’s there?</h3>

							<h4 className='h6'>
								1. Much laughter with online warm-up game
							</h4>

							<h4 className='h6'>2. Sharing: Life in pandemic</h4>
							<p className='ps-3'>
								-What’s on campus today? <br />
								-Remote work: New normal – Alumni sharing
								<br />
								-Mental health in lockdowns – Alumni sharing
								<br />
								-Breakout rooms: How are you? How you’re dealing
								with the crisis, or what you’re doing to help
								those in need?
								<br />
							</p>
							<h4 className='h6'>
								3. Online Flea market: Studying equipment and
								others for sales/giving-away!
							</h4>
							<p className='ps-3'>
								Old laptop, webcam, keyboard, desk or any other
								items - sell or give away to your
								fellow-students .
							</p>

							<a
								href='/flea-market'
								className='btn d-block btn-primary my-3 text-uppercase fw-bold'
							>
								Here
							</a>
						</div>
						<Comments />
					</div>
				</div>
			</div>
			<div className='my-3 ' />
		</div>
	);
}
function App() {
	return (
		<Router>
			<header></header>

			<main>
				<section className='py-3 text-center container'>
					<div className='row '>
						<div className='col   '>
							<div className=' position-relative  bg-dark'>
								<img
									alt=''
									className='mw-100'
									src='/preview-113565-dUzlJu9gJJ-high_0007.jpg'
								/>
								<div className='position-absolute bottom-0 start-0 end-0 p-3 text-start'>
									<span className=' bg-white d-inline-block'>
										<img
											src='/Fachhochschule_Südwestfalen_20xx_logo.svg.png'
											height={100}
											alt=''
										/>
									</span>
									<h1 className=' text-white p-3 display-3  bg-dark fw-bold '>
										SH SWF Alumni Virtual Event
									</h1>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Switch>
					<Route path={`/flea-market`}>
						<FleaMarket />
					</Route>

					<Route path='/'>
						<Topic />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
