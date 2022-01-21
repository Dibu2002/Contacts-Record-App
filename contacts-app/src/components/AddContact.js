import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    }

    submit = (e) => {

        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Kindly fill out all fields.")
            return
        }

        this.props.addHandler(this.state);
        console.log(this.state);
        window.location = "/";
        this.setState({
            name: "",
            email: ""
        })
        // this.props.history.push("/")
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

                <button type="submit" className="btn btn-primary">Add</button>

                <hr style={{ color: "blue", border: "1px solid red" }} />
            </form>
        )
    }
}

export default AddContact;