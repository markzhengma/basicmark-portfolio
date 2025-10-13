"use client";
import { person, social } from "@/resources/content";
import { Nav, Navbar, Container } from "react-bootstrap";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Navbar className="bg-body-tertiary">
			<Container fluid className="px-3">
				<Navbar.Text>
					© {currentYear} / {person.nickname} {person.name_eng} / Build with ❤️
				</Navbar.Text>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="justify-content-end">
					{social.map((item) => (
						<Nav.Link
							key={item.name}
							href={item.link}
							className="btn btn-light fs-5"
							target="_blank"
							rel="noopener noreferrer"
							active={false}
						>
							{new item.icon()}
						</Nav.Link>
					))}
				</Nav>
			</Container>
		</Navbar>
	);
};
