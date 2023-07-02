import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
    return (
        <div>
            <header className="Header">
                <h2 className="Header-title">AGRIHUB</h2>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 sidebar" style={{ width: '250px' }}>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/gitds-admin" className="nav-link">GITDS Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bc-agent" className="nav-link">BC Agent</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bank" className="nav-link">Bank</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/warehouse" className="nav-link">Warehouse</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/farmer" className="nav-link">Farmer</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 content">
                        <h3>Dashboard</h3>
                        <p>Dashboard content will display here.....!!!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
