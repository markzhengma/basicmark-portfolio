import { person, job, study } from "@/resources/content";
import Image from "next/image";
import { Nav, Navbar, Row, Col, Badge, Stack, Button } from "react-bootstrap";
import { Introduction, Job, Study } from "@/components";
import { iconLibrary } from "@/resources/icon";

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
						{new iconLibrary.globe()}
						{" " + person.city + ", " + person.country}
					</Col>
					<Col>
						{person.languages.map((language) => (
							<Button
								variant="dark"
								size="sm"
								key={language}
								className="mx-1 py-0 px-1"
							>
								{language}
							</Button>
						))}
					</Col>
				</Stack>
			</Col>
			<Col xs="8" md="7" lg="8" className="px-5" style={{ maxWidth: "800px" }}>
				<Row
					data-bs-spy="scroll"
					data-bs-target="#navbar-example3"
					data-bs-smooth-scroll="true"
					tabIndex="0"
				>
					<div id="simple-list-item-1"></div>
					<Introduction />

					<div id="simple-list-item-2"></div>
					<p className="fs-1 fw-semibold lh-lg text-body-secondary mt-5">
						Work Experience
					</p>
					{job.map((item) => <Job key={item.id} job={item} />).reverse()}
					<div id="simple-list-item-3"></div>
					<p className="fs-1 fw-semibold lh-lg text-body-secondary mt-5">
						School Studies
					</p>
					{study.map((item) => <Study key={item.id} study={item} />).reverse()}
					<h4 id="simple-list-item-4">Skills</h4>
					<p>{person.description}</p>
				</Row>
			</Col>
		</Row>
	);
}
