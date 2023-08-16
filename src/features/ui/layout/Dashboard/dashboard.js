import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <main>
            <h1>Dashboard</h1>
            <Outlet />
        </main>
    )
}

export default Dashboard;