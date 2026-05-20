import { Link } from "react-router-dom";

export default function AdminDashboard() {

    return (
        <div className="pt-6">

            <h1 className="text-3xl font-bold mb-4">
                Admin Dashboard
            </h1>

            <Link
                to="/admin/create"
                className="bg-indigo-500 text-white px-4 py-2 rounded"
            >
                Create Equipment
            </Link>

        </div>
    );
}