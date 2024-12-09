import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, ReactJS, 
								HTML, CSS, NPM,
								TailwindCSS
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>soon</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;