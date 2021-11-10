import { Link } from "react-router-dom";

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
};

return (
    <header>
        <h1 className="title">My Portfolio Page</h1>
        <nav style={navStyle}>
        <Link to="/" className="nav-bar">
            <div>HOME</div>
        </Link>
        <Link to="/about" className="nav-bar">
            <div>ABOUT</div>
        </Link>
        <Link to="/projects" className="nav-bar">
            <div>PROJECTS</div>
        </Link>
        </nav>
    </header>
    );
}

export default Header;