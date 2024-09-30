import React from 'react';
import '../styles/navbar.css';
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ size, setShow }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                    My Shopping
                </span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <BsCart4/>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar