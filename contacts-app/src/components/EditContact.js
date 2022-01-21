import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

class EditContact extends React.Component {

    constructor(props) {
        super(props)
        const upkey = localStorage.getItem("upkey");
        let upList = props.contacts.filter((contact) => { return (contact.id === upkey) })
        upList = upList[0];
        this.state = {
            name: upList.name,
            email: upList.email,
            id: upkey
        };
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Kindly fill out all fields.")
            return
        }
        this.props.updateHandler(this.state);
        window.location = "/";
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        return (
            <form className="form container" onSubmit={this.submit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>/
                    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
                <hr style={{ color: "blue", border: "1px solid red" }} />

            </form>
        )
    }
}

export default EditContact;