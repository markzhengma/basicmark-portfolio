"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Row, Col, Stack } from "react-bootstrap";

export const Study = ({ study }) => {
	return (
		// <Stack>
		// 	<p className="fs-3 fw-semibold lh-base text-body-dark mt-3">
		// 		{study.school}
		// 	</p>
		// 	<p className="fs-6 fw-medium lh-1 text-body-secondary mt-2">{study.time}</p>
		// 	<p className="fs-6 fw-medium lh-1 text-body-dark mt-2">{study.department}</p>
		// 	<p className="fs-6 fw-medium lh-1 text-body-dark mt-2">{study.program}</p>
		// </Stack>
		<Card className="px-0 border-0">
			<Card.Header className="fw-semibold text-body-dark">
				{study.school}
			</Card.Header>
			<Card.Body>
				<Card.Subtitle className="mb-2 fw-medium text-body-secondary">
					{study.time}
				</Card.Subtitle>
				<Card.Text className="fw-medium text-body-dark">{study.program}</Card.Text>
			</Card.Body>
		</Card>
	);
};
