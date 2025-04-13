import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="navbar bg-white text-black w-full px-30 py-2 flex grid md:grid-cols-2">
            <Link to="/">首頁</Link>
            <div className="col-span-1 flex justify-end items-center gap-4">
            <Link to="/"><img src="img/moon.png" alt="dark mode" /></Link>
            <Link to="/">登入</Link>
            <Link to="/">註冊</Link>
            <Link to="/"><img src="img/heart.png" alt="cart" /></Link>
            </div>
        </div>
    )
}