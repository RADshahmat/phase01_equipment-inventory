import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MainLayout() {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    // dark mode effect
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div>
            {/* NAVBAR */}
            <nav className="fixed w-full z-10 bg-slate-800 text-white p-4 flex gap-4 items-center justify-between">

                <div className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className=" px-4 py-2 rounded-xl text-black bg-white dark:bg-gray-800  border border-slate-200 dark:border-gray-700 shadow-sm hover:scale-105  transition  text-sm font-medium   dark:text-white " >
                        {darkMode ? "☀ Light" : "🌙 Dark"}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>


            </nav>

            <div  className="pt-6">
                <Outlet />
            </div>
        </div>
    );
}