import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
                Powered by
                <a href="https://github.com/Felipe-FSantos"> Felipe-FSantos </a>            
            </p>
            <p>
            <a href="https://www.instagram.com/lipefs26"> Instagram @lipefs26</a>
            </p>
        </div>
        </header>
    )
}

export default Header;