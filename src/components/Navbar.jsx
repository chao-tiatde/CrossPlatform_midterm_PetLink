import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="navbar bg-white text-black">
            <div className="nav-links">
                <Link to="/">首頁</Link>
                <Link to="/"><img src="img/moon.png" alt="dark mode" /></Link>
                <Link to="/">登入</Link>
                <Link to="/">註冊</Link>
                <Link to="/"><img src="img/heart.png" alt="cart" /></Link>
            </div>
        </div>
    )
}