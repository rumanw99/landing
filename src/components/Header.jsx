import asset from '../../public/image/asset.png'
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={asset} alt="Your Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
