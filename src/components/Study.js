"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Row, Col, Stack } from "react-bootstrap";

export const Study = ({ study }) => {
	return (
		<Card className="border-0 rounded-0 px-0 mb-4">
			<Card.Header className="fs-5 fw-semibold text-body-dark bg-transparent">
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
