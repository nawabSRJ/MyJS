import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl my-4 text-center">Dashboard</h1>
            <center><button onClick={handleLogout} className="text-2xl py-2 px-4 bg-rose-500 text-black w-[20%] rounded-full cursor-pointer my-20">Logout</button></center>
        </div>
    );
}

export default Dashboard;
