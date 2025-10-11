import { person, job, study } from "@/resources/content";
import Image from "next/image";
import { Nav, Navbar, Row, Col, Badge, Stack, Button } from "react-bootstrap";
import { Introduction, Job, Study, Skill } from "@/components";
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
						<a className="nav-link" href="#introduction">
							简介
						</a>
						<a className="nav-link" href="#work-experience">
							工作经历
						</a>
						<a className="nav-link" href="#school-studies">
							学位与专业培训
						</a>
						<a className="nav-link" href="#technical-skills">
							技术栈
						</a>
					</Nav>
				</Nav>
			</Navbar>
			<Col sm="4" md="5" lg="4" className="d-none d-sm-inline">
				<Stack
					className="sticky-top px-5"
					gap={2}
					style={{
						paddingTop: "80px",
						width: "fit-content",
						height: "fit-content",
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
						alt="Head Image"
						priority
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
			<Col sm="8" md="7" lg="8" className="px-5" style={{ maxWidth: "800px" }}>
				<Row
					data-bs-spy="scroll"
					data-bs-target="#navbar-example3"
					data-bs-smooth-scroll="true"
					tabIndex="0"
				>
					<div id="introduction"></div>
					<Introduction />

					<div id="work-experience" className="mb-5"></div>
					<p className="fs-1 fw-semibold lh-lg text-body-secondary mt-5">工作经历</p>
					{job.map((item) => (
						<Job key={item.id} job={item} />
					))}
					<div id="school-studies" className="mb-5"></div>
					<p className="fs-1 fw-semibold lh-lg text-body-secondary mt-5">
						学位与专业培训
					</p>
					{study.map((item) => (
						<Study key={item.id} study={item} />
					))}
					<div id="technical-skills" className="mb-5"></div>
					<p className="fs-1 fw-semibold lh-lg text-body-secondary mt-5">技术栈</p>
					<Skill />
				</Row>
			</Col>
		</Row>
	);
}
