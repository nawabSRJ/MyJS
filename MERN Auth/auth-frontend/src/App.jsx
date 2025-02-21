import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            axios.post("http://localhost:8080/api/verifyToken", { token })
                .then(res => {
                    if (res.data.status === "ok") {
                        navigate("/dashboard");
                    }
                });
        }
    }, [navigate]);

    return (
        <div className="flex flex-col">
            <h1 className="text-center text-black text-4xl">Welcome to My App</h1>
            <a href="/register" className="text-center text-black text-2xl mt-10">Register</a>
            <a href="/login" className="text-center text-black text-2xl mt-10">Login</a>
        </div>
    );
}

export default App;
