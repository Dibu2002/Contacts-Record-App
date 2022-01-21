import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="container">
            <h1 className="display-6">Contacts Record</h1>
            <hr style={{ color: "blue", border: "1px solid red" }} />

            <span className="addcont">
                <strong  className="addcontact">Add Contact</strong>
              
                <Link to="/add">
                    <button type="button" className="btn btn-warning">Add Contact</button>
                </Link>
            </span>
            <hr style={{  border: "1px solid purple" }} />
        </div>
    )
}

export default Header;