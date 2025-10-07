"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Stack } from "react-bootstrap";

export const Job = ({ job }) => {
	return (
		<Card className="px-0 border-0">
			<Card.Header className="d-flex justify-content-between">
				<span className="fw-medium lh-base text-body-dark">{job.company}</span>
				<span className="fw-medium lh-base text-body-secondary">{job.time}</span>
			</Card.Header>
			<Card.Body>
				<Card.Title className="text-body-dark" style={{ fontSize: "16px" }}>
					{job.role}
				</Card.Title>
				<ul className="fw-normal lh-lg text-body-secondary px-3">
					{job.achievement.map((item, index) => (
						<li key={`${job.id}-achieve${index}-${item}`}>{item}</li>
					))}
				</ul>
				<Link
					href={job.projectLink}
					className={job.projectLink !== "" ? "d-inline" : "d-none"}
					style={{ textDecoration: "none", fontWeight: "500" }}
				>
					相关项目 {new iconLibrary.arrowRight()}
				</Link>
			</Card.Body>
			<Stack
				direction="horizontal"
				className="mx-2 mb-4"
				style={{ width: "100%", overflow: "scroll" }}
			>
				{job.pics.map((link, index) => (
					<Image
						key={`${job.id}-pic${index}-${link}`}
						src={link}
						width={300}
						height={180}
						alt="..."
						className="rounded mx-1 object-fit-cover"
					/>
				))}
			</Stack>
		</Card>
	);
};
