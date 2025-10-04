"use client";
import { iconLibrary } from "@/resources/icon";
import { usePathname } from "next/navigation";
import { Nav, Navbar, Container, Button, Row } from "react-bootstrap";

export const Navigation = () => {
	const pathname = usePathname() ?? "";

	return (
		<Row className="sticky-top pt-1 mx-auto" style={{ width: "fit-content" }}>
			<Navbar
				bg="light"
				className="mx-auto p-1"
				style={{ width: "fit-content", borderRadius: "24px" }}
			>
				<Nav className="">
					<Button
						href="/"
						className="btn btn-light"
						style={{ borderRadius: "24px" }}
						active={pathname === "/"}
					>
						{new iconLibrary.home()}
					</Button>
					<Button
						href="/about"
						className="btn btn-light"
						style={{ borderRadius: "24px" }}
						active={pathname === "/about"}
					>
						{new iconLibrary.person()} About
					</Button>
					<Button
						href="/work"
						className="btn btn-light"
						style={{ borderRadius: "24px" }}
						active={pathname === "/work"}
					>
						{new iconLibrary.book()} Work
					</Button>
				</Nav>
			</Navbar>
		</Row>
	);
};
