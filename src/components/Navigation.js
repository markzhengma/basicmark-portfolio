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
				className="mx-auto p-1 rounded-pill"
				style={{ width: "fit-content" }}
			>
				<Nav className="">
					<Button
						variant="light"
						href="/"
						className="rounded-circle fw-semibold"
						active={pathname === "/"}
					>
						{new iconLibrary.home()}
					</Button>
					<Button
						variant="light"
						href="/about"
						className="rounded-pill fw-semibold"
						active={pathname === "/about"}
					>
						{new iconLibrary.person()} 关于
					</Button>
					<Button
						variant="light"
						href="/work"
						className="rounded-pill fw-semibold"
						active={pathname === "/work"}
					>
						{new iconLibrary.book()} 项目
					</Button>
					<Button
						variant="light"
						href="/"
						disabled
						className="rounded-pill fw-semibold"
					>
						{new iconLibrary.gallery()} 影集
					</Button>
				</Nav>
			</Navbar>
		</Row>
	);
};
