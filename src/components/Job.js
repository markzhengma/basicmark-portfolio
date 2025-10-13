"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Stack } from "react-bootstrap";

export const Job = ({ job }) => {
	return (
		<Card className="px-0 border-0 mb-5 ">
			<Card.Header className="d-flex justify-content-between align-items-center rounded-0 fw-medium lh-base bg-transparent pb-0">
				<span className="text-body-dark fs-4">{job.company}</span>
				<span className="text-body-secondary">{job.time}</span>
			</Card.Header>
			<Card.Body className="pt-1">
				<Card.Title className="text-body-dark mb-3" style={{ fontSize: "16px" }}>
					{job.role}
				</Card.Title>
				<ul className="fw-normal lh-lg text-body-secondary px-3">
					{job.achievement.map((item, index) => (
						<li key={`${job.id}-achieve${index}-${item}`}>{item}</li>
					))}
				</ul>
				<Button
					href={job.projectLink}
					variant="outline-secondary"
					className={job.projectLink !== "" ? "d-inline" : "d-none"}
				>
					相关项目 {new iconLibrary.arrowRight()}
				</Button>
			</Card.Body>
			<Stack
				direction="horizontal"
				className="px-2"
				style={{
					width: "100%",
					overflow: "scroll",
				}}
			>
				{job.pics.map((link, index) => (
					<Image
						key={`${job.id}-pic${index}-${link}`}
						src={link}
						width={320}
						height={180}
						placeholder="blur"
						blurDataURL="/images/placeholder.png"
						alt="..."
						className="rounded mx-1 object-fit-cover"
						style={{ aspectRatio: "16/9" }}
					/>
				))}
			</Stack>
		</Card>
	);
};
