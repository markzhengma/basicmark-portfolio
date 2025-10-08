"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Row, Col, Stack } from "react-bootstrap";

export const Study = ({ study }) => {
	return (
		<Card className="border-0 rounded-0 px-0 my-1">
			<Card.Header className="fw-semibold text-body-dark">
				{study.school}
			</Card.Header>
			<Card.Body>
				<Card.Subtitle className="mb-2 fw-medium text-body-secondary">
					{study.time}
				</Card.Subtitle>
				<Card.Text className="fw-medium text-body-dark">{study.program}</Card.Text>
			</Card.Body>
			{/* <Image
				src="https://static.eileen-yu.com/portfolio/su.jpg"
				alt="Skill Image"
				height={120}
				width={240}
				className="rounded ms-3"
				style={{
					objectFit: "cover",
					aspectRatio: "16/9",
				}}
			/> */}
		</Card>
	);
};
