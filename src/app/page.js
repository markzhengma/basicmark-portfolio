import Image from "next/image";
import styles from "./page.module.css";
import { Button, Col, Container, Row, Card, Stack } from "react-bootstrap";
import { ControlledCarousel } from "@/components";
import Link from "next/link";
import { brand, person, project } from "@/resources/content";
import { iconLibrary } from "@/resources/icon";

export default function Home() {
	return (
		<Container fluid>
			<Row className="d-flex justify-content-center">
				<Col
					xs="10"
					md="9"
					lg="6"
					className="d-flex flex-column align-items-center"
				>
					<Button
						variant="light"
						href="/work"
						className="mt-5 mb-2 rounded-pill px-4"
					>
						项目精选
					</Button>
					<Stack gap={4} className="mt-5 mb-5 text-center">
						<p
							className="fw-bold lh-1 text-body-secondary"
							style={{ fontSize: "48px" }}
						>
							{brand.headline}
						</p>
						<p className="fs-4 fw-medium lh-1 text-body-secondary">
							{brand.selfintro}
						</p>
					</Stack>
					<Button
						variant="light"
						href="/about"
						className="mt-2 mb-5 rounded-pill px-4"
					>
						了解我的故事
					</Button>
					<Stack gap={4}>
						<ControlledCarousel displayItem={project.slice(0, 3)} itemType={"work"} />
					</Stack>
					<p className="fs-4 fw-medium lh-1 text-body-secondary">{brand.end}</p>
					<Button
						variant="light"
						href={`mailto:${person.email}`}
						className="mt-2 mb-5 rounded-pill px-4"
					>
						{new iconLibrary.email()} 邮件
					</Button>
				</Col>
			</Row>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://beian.miit.gov.cn"
				className="text-decoration-none text-body-tertiary"
				style={{ fontSize: "10px" }}
			>
				沪ICP备2024096456号-2
			</a>
		</Container>
	);
}
