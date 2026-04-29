// src/pages/Dashboard.tsx
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f4f6f9",
                padding: "20px",
            }}
        >
            {/* Navbar */}
            <div
                style={{
                    background: "#667eea",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h3>Dashboard</h3>
                <button
                    onClick={logout}
                    style={{
                        background: "#ff4d4f",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Content */}
            <div
                style={{
                    marginTop: "30px",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
            >
                <h2 style={{ color: "#333" }} >Welcome 👋</h2>
                <p style={{ marginTop: "10px", fontSize: "16px" }}>
                    Logged in as: <strong>{user?.email}</strong>
                </p>
            </div>
        </div>
    );
};

export default Dashboard;