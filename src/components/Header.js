"use client";
import { iconLibrary } from "@/resources/icon";
import { person } from "@/resources/content";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

// const changeTheme = () => {
// 	console.log("changing theme");
// };
// const changeLanguage = () => {
// 	console.log("changing Language");
// };

export const Header = () => {
	return (
		<Navbar sticky="top" bg="light" data-bs-theme="light">
			<Container fluid>
				<Navbar.Text>
					<span>{person.name_eng}</span>
					<span className="d-none d-sm-inline"> / {person.city_eng}</span>
				</Navbar.Text>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="justify-content-end">
					<Button variant="light" disabled>
						{new iconLibrary.nightmode()}
					</Button>
					<Button variant="light" disabled>
						{new iconLibrary.language()}
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};
