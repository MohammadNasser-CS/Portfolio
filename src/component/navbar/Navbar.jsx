import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={style.backg + " navbar navbar-expand-lg content-box overflow-auto sticky-top"} >
                <div className="container">
                    <Link className="navbar-brand fs-4 text-white" to="/">Mohammad Nasser</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbarSupportedContent" >
                        <ul className="navbar-nav me-auto">
                                    <li className="nav-item ">
                                        <Link className="nav-link border rounded me-3 text-white" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link border rounded me-3 text-white" to="/about">About Me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link border rounded  me-3 text-white" to="/my_portfolio">My Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link border rounded me-3 text-white" to="/contact">Contact Me</Link>
                                    </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
