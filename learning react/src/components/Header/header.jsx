import "./header.css"

function Header({value}) {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <h1>Test{value}</h1>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header