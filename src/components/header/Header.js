import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						ERROR 404
					</strong>
					<br/> 
				</h1>
				<div className="header__text">
					<p>something went wrong</p>
				</div>
				
			</div>
		</header>
	);
}

export default Header;