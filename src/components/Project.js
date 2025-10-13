"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import { Button, Card, Carousel } from "react-bootstrap";

export const Project = ({ project }) => {
	return (
		<Card className="rounded-0 border-0 border-bottom mb-5">
			<div className="pt-5" id={project.id} />
			<Carousel
				fade
				pause="hover"
				className="shadow bg-body-tertiary"
				style={{ width: "100%", borderRadius: "6px", overflow: "hidden" }}
			>
				{project.pics.map((pic, int) => (
					<Carousel.Item
						key={`${project.id}-pic${int}`}
						className="bg-light"
						style={{ aspectRatio: "16/9" }}
					>
						<Image
							src={pic}
							alt="Project Cover"
							fill
							style={{ objectFit: "cover", height: "100%" }}
						/>
					</Carousel.Item>
				))}
			</Carousel>
			<Card.Body className="my-3">
				<Card.Title className="fs-3 lh-base fw-semibold text-body-dark">
					{new iconLibrary.rocket()} {project.title}
				</Card.Title>
				<Card.Text className="fs-0 lh-base fw-semibold text-body-secondary">
					{new iconLibrary.person()} {project.role}
				</Card.Text>
				<Card.Text className="fs-0 lh-base fw-normal text-body-dark">
					{project.desc}
				</Card.Text>
				<ul className="fs-0 lh-base fw-normal text-body-secondary">
					{project.techspecs.map((item) => (
						<li key={`${project.id}-techspecs-${item}`}>{item}</li>
					))}
				</ul>
			</Card.Body>
		</Card>
	);
};
