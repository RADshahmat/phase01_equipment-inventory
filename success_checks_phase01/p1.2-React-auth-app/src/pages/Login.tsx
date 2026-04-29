// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(email, password);

        if (success) {
            navigate("/");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "10px",
                    width: "300px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <h2 style={{color: "#333", textAlign: "center", marginBottom: "10px" }}>
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#667eea",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>

                {error && (
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                )}
            </form>
        </div>
    );
};

export default Login;