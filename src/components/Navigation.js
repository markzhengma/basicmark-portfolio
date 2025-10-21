"use client";
import { iconLibrary } from "@/resources/icon";
import { usePathname } from "next/navigation";
import { Nav, Navbar, Container, Button, Row } from "react-bootstrap";

export const Navigation = () => {
	const pathname = usePathname() ?? "";

	return (
		<Row className="sticky-top pt-1 mx-auto" style={{ width: "fit-content" }}>
			<Navbar bg="light" className="mx-auto p-1 mt-1 rounded-pill w-auto">
				<Nav>
					<Button
						variant="light"
						href="/"
						className="rounded-pill fw-semibold py-1"
						active={pathname === "/"}
					>
						{new iconLibrary.home()}
					</Button>
					<Button
						variant="light"
						href="/about"
						className="rounded-pill fw-semibold py-1"
						active={pathname === "/about"}
					>
						{new iconLibrary.person()}{" "}
						<span className="d-none d-sm-inline">关于</span>
					</Button>
					<Button
						variant="light"
						href="/work"
						className="rounded-pill fw-semibold py-1"
						active={pathname === "/work"}
					>
						{new iconLibrary.book()} <span className="d-none d-sm-inline">项目</span>
					</Button>
					<Button
						variant="light"
						href="/"
						disabled
						className="rounded-pill fw-semibold py-1"
					>
						{new iconLibrary.gallery()}{" "}
						<span className="d-none d-sm-inline">影集</span>
					</Button>
				</Nav>
			</Navbar>
		</Row>
	);
};
