"use client";
import { person, social } from "@/resources/content";
import { Nav, Navbar, Container } from "react-bootstrap";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Navbar className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Text>
					© {currentYear} / "{person.nickname}" {person.name} / Build with Heart
				</Navbar.Text>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="justify-content-end">
					{social.map((item) => (
						<Nav.Link
							key={item.name}
							href={item.link}
							className="btn btn-light"
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
		// <footer>
		// 	<nav className="navbar navbar-expand border-top bg-light">
		// 		<div className="container-fluid">
		// 			<span className="navbar-text">
		// 				© {currentYear} / "{person.nickname}" {person.name} / Build with Heart
		// 			</span>
		// 			<ul className="navbar-nav">
		// 				{social.map((item) => (
		// 					<li className="nav-item" key={item.name}>
		// 						<a
		// 							className="btn btn-sm btn-light"
		// 							aria-current="page"
		// 							href={item.link}
		// 							target="_blank"
		// 							rel="noopener noreferrer"
		// 						>
		// 							{new item.icon()}
		// 						</a>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</div>
		// 	</nav>
		// </footer>
	);
};
