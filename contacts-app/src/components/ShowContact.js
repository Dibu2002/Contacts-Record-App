import React from "react";
import User from "../images/user.png"
import Bin from "../images/bin.png"
import Update from "../images/update.jpg"
import { Link } from "react-router-dom";

const ShowContact = (props) => {

    console.log("showcontact");

    const showContactList =
        props.contacts.map((contact) => {
            return (

                <div className="card container " >
                    <div className="card-body">

                        <img style={{ height: "50px", width: "50px" }} src={User} alt="user" />

                        <div className="cardbod">
                            <h5 className="card-title">{contact.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        </div>

                        <Link to={{ pathname: `/edit` }}>
                            <img style={{ height: "30px", width: "50px", position: "absolute", right: "45px", top: "26px", padding: "1px" }} src={Update} alt="update" onClick={() => props.upHandler(contact.id)} />
                        </Link>

                        <img style={{ height: "30px", width: "30px", position: "absolute", right: "10px", top: "26px", padding: "1px" }} src={Bin} alt="bin" onClick={() => props.idHandler(contact.id)} />

                    </div>
                </div>
            );
        });

    return <div>{showContactList}</div>

};

export default ShowContact;