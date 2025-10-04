import { person } from "@/resources/content";
import Image from "next/image";
import { Nav, Navbar, Row, Col, Badge, Stack, Button } from "react-bootstrap";

export default function About() {
	return (
		<Row>
			<Navbar
				className="fixed-top h-100 d-lg-flex d-none"
				style={{ width: "fit-content" }}
			>
				<Nav className="flex-column align-items-stretch pe-4 border-end">
					<Nav className="nav nav-pills flex-column">
						<a className="nav-link" href="#simple-list-item-1">
							Introduction
						</a>
						<a className="nav-link" href="#simple-list-item-2">
							Work Experience
						</a>
						<a className="nav-link" href="#simple-list-item-3">
							School Studies
						</a>
						<a className="nav-link" href="#simple-list-item-4">
							Skills
						</a>
					</Nav>
				</Nav>
			</Navbar>
			<Col xs="4" md="5" lg="4">
				<Stack
					className="sticky-top"
					gap={2}
					style={{
						paddingTop: "80px",
						width: "fit-content",
						alignItems: "center",
						justifySelf: "flex-end",
					}}
				>
					<Image
						src={person.avatar}
						width={160}
						height={160}
						className="rounded-circle shadow p-1 bg-body-tertiary"
						style={{ objectFit: "cover" }}
						alt="..."
					/>
					<Col>
						{person.city}, {person.country}
					</Col>
					<Col>
						{person.languages.map((language) => (
							<Badge bg="dark" key={language} className="mx-1">
								{language}
							</Badge>
						))}
					</Col>
				</Stack>
			</Col>
			<Col xs="8" md="7" lg="8">
				<div
					data-bs-spy="scroll"
					data-bs-target="#navbar-example3"
					data-bs-smooth-scroll="true"
					tabIndex="0"
				>
					<p
						id="simple-list-item-1"
						className="fs-1 fw-bold lh-base text-body-secondary"
					>
						"Mark" Zheng Ma
					</p>
					<p>Job Title</p>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-2">Work Experience</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-3">School Studies</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-4">Skills</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
				</div>
			</Col>
		</Row>
	);
}
