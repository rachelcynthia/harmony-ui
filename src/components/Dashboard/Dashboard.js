import React from "react";
import Header from "../Header/Header";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Header isLoggedIn={true} />
            <div className="dashboard_container">
                dashboard
            </div>
        </>
    )
}

export default Dashboard