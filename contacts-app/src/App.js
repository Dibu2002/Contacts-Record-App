import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ShowContact from "./components/ShowContact";
import { useState, useEffect } from "react";
import { uuid as uuidv4 } from 'uuidv4';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as uuid from 'uuid'
import api from "./api/contact"
import axios from "axios";


function App() {

	const [contact, setcontact] = useState([])

	const retrieval = async () => {
		const response = await api.get("/contacts");
		return (response.data);
	}

	const fetchData = async () => {
		const Contactdata = await axios.get('http://localhost:3006/contacts')
		const data = Contactdata.data
		setcontact(data)
	}

	useEffect(() => {
		// const retrieveData = JSON.parse(localStorage.getItem("contact"));
		// setcontact(retrieveData);

		// fetchData();
		const getContacts = async () => {
			const retrieve = await retrieval();
			if (retrieve) setcontact(retrieve);
		};
		getContacts();
	}, [])

	useEffect(() => {
		localStorage.setItem("contact", JSON.stringify(contact))
	}, [contact])

	const addHandler = (contacts) => {
		const newData = { ...contacts, id: uuid.v4() }
		api.post("/contacts", newData);
		setcontact([...contact, newData])
	}

	const updateHandler = async (contact) => {
		const response = await api.put(`/contacts/${contact.id}`, contact);
	}

	const upHandler = (id) => {
		localStorage.setItem("upkey", id)
	}

	const idHandler = (id) => {
		api.delete(`/contacts/${id}`);
		const deleteList = contact.filter((contact) => { return (contact.id != id) })
		setcontact(deleteList);
	}

	return (
		<div className="App">

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/add" element={<AddContact addHandler={addHandler} />} />
					<Route path="/edit" element={<EditContact updateHandler={updateHandler} contacts={contact} />} />
					<Route path="/" element={<ShowContact contacts={contact} idHandler={idHandler} upHandler={upHandler} />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
