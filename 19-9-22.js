form_three.js

import React,{useState } from "react";
const form_three =()=> {
	const [name, setName] = useState("");
	const handleSubmit = (event) => {
	event.preventdefault();
	
	console.log(name);
	sole.log(pin);
	}
	return (
		<form onSubmit={handleSubmit}>
		<lable>Enter Your name:
		<input type="text" value= {name} onChange={(e) => setName(e.target.value)}/>
		
}

App.js

import React,{useState } from "react";
import Form