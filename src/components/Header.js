"use client";
import { iconLibrary } from "@/resources/icon";
import { usePathname } from "next/navigation";
import { person } from "@/resources/content";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const changeTheme = () => {
	console.log("changing theme");
};
const changeLanguage = () => {
	console.log("changing Language");
};
export const Header = () => {
	const pathname = usePathname() ?? "";

	return (
		<Navbar sticky="top" bg="light" data-bs-theme="light">
			<Container fluid>
				<Navbar.Text>
					{person.name} / {person.location}
				</Navbar.Text>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="justify-content-end">
					<Button variant="light" onClick={() => changeTheme()}>
						{new iconLibrary.rocket()}
					</Button>
					<Button variant="light" onClick={() => changeLanguage()}>
						{new iconLibrary.globe()}
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};
