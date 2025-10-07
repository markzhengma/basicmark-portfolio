import { Project } from "@/components";
import { project } from "@/resources/content";
import { Navbar, Row, Col, Stack, Card } from "react-bootstrap";

export default function Work() {
	return (
		<Row className="d-flex justify-content-center">
			<Col xs="10" md="8" lg="6" className="d-flex flex-column align-items-center">
				<p
					className="fw-semibold lh-lg text-body-secondary mt-5 mx-auto"
					style={{ fontSize: "46px" }}
				>
					我的项目
				</p>
				<Stack gap={4}>
					{project.map((item) => <Project key={item.id} project={item} />).reverse()}
				</Stack>
			</Col>
		</Row>
	);
}
