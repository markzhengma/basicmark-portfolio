import Image from "next/image";
import styles from "./page.module.css";
import { Button, Col, Container, Row, Card, Stack } from "react-bootstrap";
import { ControlledCarousel } from "@/components";
import Link from "next/link";
import { brand, project } from "@/resources/content";

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
					<Button variant="light" className="mt-5 mb-2">
						Featured Work
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
					<Button variant="light" className="mt-2 mb-5">
						About Me
					</Button>
					<Stack gap={4}>
						<ControlledCarousel
							displayItem={project.reverse().slice(0, 3)}
							itemType={"work"}
						/>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}
