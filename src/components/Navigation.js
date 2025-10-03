"use client";
import { iconLibrary } from "@/resources/icon";
import { usePathname } from "next/navigation";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

export const Navigation = () => {
	const pathname = usePathname() ?? "";

	return (
		<Navbar sticky="top" className="mx-auto p-2" style={{ width: "fit-content" }}>
			<Nav className="">
				<Nav.Link href="/" className="btn btn-light" active={pathname === "/"}>
					{new iconLibrary.home()}
				</Nav.Link>
				<Nav.Link
					href="/about"
					className="btn btn-light"
					active={pathname === "/about"}
				>
					{new iconLibrary.person()} About
				</Nav.Link>
				<Nav.Link
					href="/work"
					className="btn btn-light"
					active={pathname === "/work"}
				>
					{new iconLibrary.book()} Work
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};
