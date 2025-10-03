import Image from "next/image";
import styles from "./page.module.css";
import { Button, Col, Container, Row, Card, Stack } from "react-bootstrap";
import { ControlledCarousel } from "@/components";
import Link from "next/link";
import { brand } from "@/resources/content";

export default function Home() {
	return (
		<Container fluid>
			<Row className="d-flex justify-content-center">
				<Col
					xs="10"
					md="8"
					lg="6"
					className="d-flex flex-column align-items-center"
				>
					<Button variant="light" className="mt-5 mb-2">
						Featured Work
					</Button>
					<Stack gap={4} className="mt-5 mb-5">
						<p className="fs-1 fw-bold lh-base text-body-secondary">
							{brand.headline}
						</p>
						<p className="fs-6 fw-semibold lh-base text-body-secondary">
							{brand.selfintro}
						</p>
					</Stack>
					<Button variant="light" className="mt-2 mb-5">
						About Me
					</Button>
					<Stack gap={4}>
						<ControlledCarousel />
						<Stack direction="horizontal" gap={2}>
							<div>
								<h3>Learning & Research Title</h3>
							</div>
							<div>
								<p>
									A brief intro to this experience. This paragraph will be two lines or
									so.
								</p>
								<Link href="#">Read More</Link>
							</div>
						</Stack>
						<br />
						<ControlledCarousel />
						<Stack direction="horizontal" gap={2}>
							<div>
								<h3>Project Title</h3>
							</div>
							<div>
								<p>
									A brief intro to this project. This paragraph will be two lines or so.
								</p>
								<Link href="#">Read More</Link>
							</div>
						</Stack>
						<br />
						<div>
							<p className="fs-3 fw-bold lh-lg text-body-secondary">{brand.end}</p>
						</div>
						<br />
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}
