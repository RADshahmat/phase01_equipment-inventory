import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    function handleLogin() {

        localStorage.setItem(
            "token",
            "fake-token"
        );

        navigate("/admin");
    }

    return (
        <div className="space-y-4  pt-6">

            <div className="text-2xl text-red-500 pt-10">
                You are not logged in. This is protected route page. So please Login to access the admin dashboard.
            </div>

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Login
            </button>

        </div>
    );
}