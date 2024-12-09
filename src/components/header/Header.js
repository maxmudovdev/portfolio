import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Ulugbek</em>
					</strong>
					<br/> a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/file/d/1e0WUKfzbPMi95CtFc0SsrfoUgXgaaoyI/view?usp=sharing" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;